import {
  Container,
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Icon,
  ListItemText,
  Chip,
  Divider,
  Avatar,
} from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';
import { aboutData } from 'data/about';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About = (): ReactElement => {
  const [isMobile, setIsMobile] = useState(false);
  const [chips1, setChips1] = useState(false);
  const [chips2, setChips2] = useState(false);

  const handleClick = (link: string) => {
    window.open(link, '_blank');
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView();

  const controls3 = useAnimation();
  const [ref3, inView3] = useInView();

  const controls4 = useAnimation();
  const [ref4, inView4] = useInView();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 1,
        transition: {
          duration: 1.2,
        },
      });
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView2) {
      controls2.start({
        opacity: 1,
        x: 1,
        transition: {
          duration: 1.2,
        },
      });
    }

    if (!inView2) {
      setChips1(false);
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start({
        opacity: 1,
        x: 1,
        transition: {
          duration: 1.2,
        },
      });
    }

    if (!inView3) {
      setChips2(false);
    }
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) {
      controls4.start({
        opacity: 1,
        x: 1,
        transition: {
          duration: 1.2,
        },
      });
    }
  }, [controls4, inView4]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      style={{
        overflowX: 'hidden',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          minHeight: '100vh',
          paddingTop: '2rem',
          boxShadow: '0px -15px 20px 10px rgba(0,0,0,0.2)',
        }}
        maxWidth="xl"
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            minHeight: 'calc(100vh - 64px)',
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Box
              sx={{
                paddingBottom: '2rem',
              }}
            >
              <Typography variant="h2">{aboutData.title}</Typography>
              <Typography variant="h6">{aboutData.description}</Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.7, type: 'spring' }}
          >
            {aboutData.paragraphs.map((paragraph, index) => (
              <Box
                sx={{
                  paddingBottom: '1rem',
                }}
                key={index}
              >
                <Typography variant="h6">{paragraph}</Typography>
              </Box>
            ))}
          </motion.div>

          <Box
            sx={{
              paddingBottom: '1rem',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.5 }}
            >
              <Button variant="outlined" onClick={() => handleClick('')}>
                Look at my github profile
              </Button>
            </motion.div>
          </Box>
        </Container>

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 100 }}
            style={{ width: '100%' }}
          >
            <Box
              sx={{
                paddingBottom: '1rem',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  textAlign: 'center',
                }}
                gutterBottom
              >
                So, what do I actually know?
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  textAlign: 'center',
                }}
              >
                My preferred tech stack is based on the following technologies:
              </Typography>

              <Box
                sx={{
                  display: 'block',
                  textAlign: 'center',
                  paddingTop: '1rem',
                }}
              >
                {aboutData?.myStack?.map((tech, index) => (
                  <>
                    {inView && (
                      <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 1 }}
                        transition={{
                          duration: 0.7,
                          delay: 0.5 * index,
                        }}
                        style={{ display: 'inline-block' }}
                      >
                        <Chip
                          key={index}
                          label={tech.tech}
                          avatar={
                            <img
                              src={tech.icon}
                              alt={tech.tech}
                              style={{ width: '1.5rem', height: '1.5rem' }}
                            />
                          }
                          onClick={() => handleClick(tech.link)}
                          sx={{
                            margin: '0.5rem',
                          }}
                        />
                      </motion.div>
                    )}
                  </>
                ))}
              </Box>

              <Divider
                sx={{
                  margin: '1rem',
                }}
              />

              <Box
                sx={{
                  paddingTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: 'center',
                  }}
                  gutterBottom
                >
                  Why do i use these technologies?
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'center',
                    maxWidth: '800px',
                  }}
                >
                  I really like to use these technologies because they are fast,
                  easy to use and have a great community behind them. I also
                  like to use them because they are modern and are used by many
                  companies.
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Container>

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
          maxWidth={false}
        >
          <motion.div
            ref={ref2}
            animate={controls2}
            initial={{ opacity: 0, x: -100 }}
            style={{ width: '100%' }}
          >
            <Container
              sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  paddingRight: isMobile ? '0rem' : '2rem',
                  paddingBottom: '1rem',
                  height: '100%',
                  width: isMobile ? '100%' : '50%',
                }}
              >
                <Typography variant="h2">Frontend</Typography>
              </Box>

              <Box
                sx={{
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  width: isMobile ? '100%' : '50%',
                }}
              >
                <List
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}
                >
                  {aboutData?.frontend?.map((skill, index) => (
                    <>
                      {inView2 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.4 * index,
                          }}
                          onAnimationComplete={() => {
                            if (index === aboutData.frontend.length - 1) {
                              setChips1(true);
                            }
                          }}
                        >
                          <ListItem>
                            <ListItemIcon>
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                width={40}
                                height={40}
                              />
                            </ListItemIcon>

                            <ListItemText
                              primary={skill.name}
                              secondary={skill.description}
                            />
                          </ListItem>
                        </motion.div>
                      )}
                    </>
                  ))}
                </List>

                <Divider
                  variant="middle"
                  sx={{
                    width: '100%',
                  }}
                >
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: 'text.secondary',
                    }}
                  >
                    Other technologies i know
                  </Typography>
                </Divider>

                <Box
                  sx={{
                    paddingBottom: '1rem',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.5,
                    }}
                  >
                    {aboutData?.otherFrontEnd?.map((skill, index) => (
                      <>
                        {inView2 && chips1 ? (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.4 * index,
                            }}
                            style={{ display: 'inline-block' }}
                          >
                            <Chip
                              sx={{
                                margin: '0.3rem',
                              }}
                              label={skill.name}
                              onClick={() => handleClick(skill.link)}
                            />
                          </motion.div>
                        ) : (
                          <Box
                            sx={{
                              display: 'inline-block',
                              height: '42px',
                              width: '100px',
                            }}
                          />
                        )}
                      </>
                    ))}
                  </motion.div>
                </Box>
              </Box>
            </Container>
          </motion.div>
        </Container>

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
          maxWidth={false}
        >
          <motion.div
            ref={ref3}
            animate={controls3}
            initial={{ opacity: 0, x: 100 }}
            style={{ width: '100%' }}
          >
            <Container
              sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row-reverse',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  paddingRight: isMobile ? '0rem' : '2rem',
                  paddingBottom: '1rem',
                  height: '100%',
                  width: isMobile ? '100%' : '50%',
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: isMobile ? 'center' : 'right',
                  }}
                >
                  Backend
                </Typography>
              </Box>

              <Box
                sx={{
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  width: isMobile ? '100%' : '50%',
                }}
              >
                <List
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}
                >
                  {aboutData?.backend?.map((skill, index) => (
                    <>
                      {inView3 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.4 * index,
                          }}
                          onAnimationComplete={() => {
                            if (index === aboutData.backend.length - 1) {
                              setChips2(true);
                            }
                          }}
                        >
                          <ListItem>
                            <ListItemIcon>
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                width={40}
                                height={40}
                              />
                            </ListItemIcon>

                            <ListItemText
                              primary={skill.name}
                              secondary={skill.description}
                            />
                          </ListItem>
                        </motion.div>
                      )}
                    </>
                  ))}
                </List>

                <Divider
                  variant="middle"
                  sx={{
                    width: '100%',
                  }}
                >
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: 'text.secondary',
                    }}
                  >
                    Other technologies i know
                  </Typography>
                </Divider>

                <Box
                  sx={{
                    paddingBottom: '1rem',
                  }}
                >
                  {aboutData?.otherBackEnd?.map((skill, index) => (
                    <>
                      {inView3 && chips2 ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.4 * index,
                          }}
                          style={{ display: 'inline-block' }}
                        >
                          <Chip
                            sx={{
                              margin: '0.3rem',
                            }}
                            label={skill.name}
                            onClick={() => handleClick(skill.link)}
                          />
                        </motion.div>
                      ) : (
                        <Box
                            sx={{
                              display: 'inline-block',
                              height: '42px',
                              width: '90px',
                            }}
                          />
                      )}
                    </>
                  ))}
                </Box>
              </Box>
            </Container>
          </motion.div>
        </Container>

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
          maxWidth={false}
        >
          <motion.div
            ref={ref4}
            animate={controls4}
            initial={{ opacity: 0, x: 100 }}
            style={{ width: '100%' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  paddingLeft: isMobile ? '0rem' : '2rem',
                  paddingBottom: '1rem',
                  height: '100%',
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  Other things you might find useful
                </Typography>
              </Box>

              <Divider
                variant="middle"
                sx={{
                  width: '100%',
                  margin: '1rem',
                }}
              />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'center',
                  }}
                  gutterBottom
                >
                  I also happen to know a few other technologies and skills that i have picked up along the way
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'block',
                  width: '100%',
                  maxWidth: '600px',
                }}
              >
                {aboutData?.other?.map((skill, index) => (
                  <>
                    {inView4 && (
                      <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.1 * index,
                        }}
                        style={{ display: 'inline-block' }}
                      >
                        <Chip
                          sx={{
                            margin: '0.5rem',
                          }}
                          label={skill.name}
                          onClick={() => handleClick(skill.link)}
                        />
                      </motion.div>
                    )}
                  </>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Container>
    </motion.div>
  );
};
