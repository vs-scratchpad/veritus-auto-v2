import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Solutions', href: getPermalink('/capabilities') },
    { text: 'Process', href: getPermalink('/process') },
    { text: 'Use Cases', href: getPermalink('/examples') },
    { text: 'Company', href: getPermalink('/about') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [{ text: 'Start a Conversation', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Veritus',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Solutions', href: getPermalink('/capabilities') },
        { text: 'Process', href: getPermalink('/process') },
        { text: 'Use Cases', href: getPermalink('/examples') },
        { text: 'Company', href: getPermalink('/about') },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { text: 'AI workflow design', href: getPermalink('/capabilities') },
        { text: 'Custom software systems', href: getPermalink('/capabilities') },
        { text: 'Automated pipelines', href: getPermalink('/capabilities') },
        { text: 'Integration systems', href: getPermalink('/capabilities') },
      ],
    },
    {
      title: 'Use cases',
      links: [
        { text: 'Sales automation', href: getPermalink('/campaigns/sales-automation') },
        { text: 'Support automation', href: getPermalink('/campaigns/support-automation') },
        { text: 'Document processing', href: getPermalink('/campaigns/document-processing') },
        { text: 'AI agent readiness', href: getPermalink('/campaigns/ai-agent-readiness') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Collateral', href: getPermalink('/collateral') },
        { text: 'Resources', href: getPermalink('/blog') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/company/veritus-automation',
      ariaLabel: 'Veritus on LinkedIn',
      icon: 'tabler:brand-linkedin',
    },
    {
      text: 'X',
      href: 'https://x.com/veritusauto',
      ariaLabel: 'Veritus on X',
      icon: 'tabler:brand-x',
    },
  ],
  footNote: `
    <span class="block font-medium text-gray-900 dark:text-white">Veritus Automation</span>
    <span class="block">AI automation systems, custom software projects, and automated pipeline solutions.</span>
    <span class="block mt-1">1775 Tysons Boulevard, Suite 520, Tysons, VA 22102</span>
    <span class="block mt-1">Copyright ${new Date().getFullYear()} Veritus Automation.</span>
  `,
};
