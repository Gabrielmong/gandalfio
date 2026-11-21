export type SocialName = 'GitHub' | 'LinkedIn' | 'Email' | 'WhatsApp';

export interface Social {
  name: SocialName;
  url: string;
  icon: string;
}
