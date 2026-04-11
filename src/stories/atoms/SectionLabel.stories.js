export default {
  title: 'Atoms/SectionLabel',
  tags: ['autodocs'],
  argTypes: {
    label:   { control: 'text' },
    variant: { control: 'select', options: ['default', 'light', 'small'] },
  },
  args: { label: 'How it works', variant: 'default' },
};

const render = ({ label, variant }) => {
  const wrap = document.createElement('div');
  wrap.style.padding = '24px';
  if (variant === 'light') wrap.style.background = 'var(--twig-color-brand-default)';
  const el = document.createElement('span');
  el.className = 'section-label' + (variant === 'light' ? ' section-label--light' : '') + (variant === 'small' ? ' section-label--sm' : '');
  el.textContent = label;
  wrap.appendChild(el);
  return wrap;
};

export const Default = { render };
export const Light   = { render, args: { label: 'By the numbers', variant: 'light' } };
export const Small   = { render, args: { label: 'What Twig delivers', variant: 'small' } };
