export default {
  title: 'Molecules/SectionIntro',
  tags: ['autodocs'],
  parameters: { backgrounds: { default: 'white' } },
  argTypes: {
    label:   { control: 'text' },
    heading: { control: 'text' },
    sub:     { control: 'text' },
    align:   { control: 'select', options: ['left', 'center'] },
    theme:   { control: 'select', options: ['default', 'dark'] },
  },
  args: {
    label:   'The Problem',
    heading: 'Restaurants run on razor-thin margins',
    sub:     'Fragmented systems, invisible losses, and operational inefficiencies hit directly where it hurts most — your bottom line.',
    align:   'left',
    theme:   'default',
  },
};

const render = ({ label, heading, sub, align, theme }) => {
  const wrap = document.createElement('div');
  wrap.style.cssText = 'padding:40px;' + (theme === 'dark' ? 'background:var(--twig-color-brand-default);' : 'background:var(--twig-color-bg-surface);');
  const cls = 'section-intro' + (align === 'center' ? ' section-intro--center' : '');
  wrap.innerHTML = `
    <div class="${cls}">
      <span class="section-label${theme === 'dark' ? ' section-label--light' : ''}">${label}</span>
      <h2 class="section-heading${theme === 'dark' ? ' section-heading--light' : ''}">${heading}</h2>
      <p class="section-sub${theme === 'dark' ? ' section-sub--light' : ''}">${sub}</p>
    </div>`;
  return wrap;
};

export const Default  = { render };
export const Centered = { render, args: { align: 'center' } };
export const DarkBg   = { name: 'Dark background', render, args: { theme: 'dark', align: 'center' } };
