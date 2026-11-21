import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Container,
  Link,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import FileDownloadOutlined from '@mui/icons-material/FileDownloadOutlined';
import OpenInNew from '@mui/icons-material/OpenInNew';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { cvHref } from 'data';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const MAX_WIDTH = 900;

/** Tracks an element's width so each PDF page renders crisp at the size it is shown. */
const useWidth = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(MAX_WIDTH);
  useEffect(() => {
    const measure = () => {
      if (ref.current) setWidth(Math.min(ref.current.clientWidth, MAX_WIDTH));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);
  return { ref, width };
};

const PageCard = ({ children }: { children: ReactElement }) => (
  <Paper sx={{ overflow: 'hidden', borderRadius: 2, bgcolor: '#fff' }}>
    {children}
  </Paper>
);

export const Resume = (): ReactElement => {
  const { ref, width } = useWidth();
  const [numPages, setNumPages] = useState(0);
  const onLoadSuccess = useCallback(
    ({ numPages }: { numPages: number }) => setNumPages(numPages),
    []
  );
  const pageHeight = Math.round(width * 1.294); // US Letter aspect ratio, for the placeholder

  return (
    <Container maxWidth="md" sx={{ pt: { xs: 8, md: 12 }, pb: 8 }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'flex-end' },
          mb: 4,
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}
        >
          Resume
        </Typography>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
          <Button
            variant="contained"
            href={cvHref}
            download
            startIcon={<FileDownloadOutlined />}
          >
            Download CV
          </Button>
          <Button
            variant="outlined"
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<OpenInNew />}
          >
            Open PDF
          </Button>
        </Stack>
      </Stack>

      <Box ref={ref}>
        <Document
          file={cvHref}
          onLoadSuccess={onLoadSuccess}
          loading={
            <Skeleton variant="rounded" width={width} height={pageHeight} />
          }
          error={
            <Alert severity="warning">
              The preview couldn&apos;t load here. You can still{' '}
              <Link href={cvHref} download>
                download the CV
              </Link>
              .
            </Alert>
          }
        >
          <Stack spacing={3} sx={{ alignItems: 'center' }}>
            {Array.from({ length: numPages }, (_, i) => (
              <PageCard key={i}>
                <Page
                  pageNumber={i + 1}
                  width={width}
                  loading={
                    <Skeleton
                      variant="rectangular"
                      width={width}
                      height={pageHeight}
                    />
                  }
                />
              </PageCard>
            ))}
          </Stack>
        </Document>
      </Box>
    </Container>
  );
};
