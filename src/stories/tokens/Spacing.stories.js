export default {
  title: 'Tokens/Spacing',
  parameters: { options: { showPanel: false }, layout: 'fullscreen', backgrounds: { default: 'white' } },
};

export const SpacingScale = {
  name: 'Spacing Scale',
  render: () => {
    const scale = [
      ['sp-1',  '4px',  '--sp-1'],
      ['sp-2',  '8px',  '--sp-2'],
      ['sp-3',  '12px', '--sp-3'],
      ['sp-4',  '16px', '--sp-4'],
      ['sp-6',  '24px', '--sp-6'],
      ['sp-8',  '32px', '--sp-8'],
      ['sp-12', '48px', '--sp-12'],
      ['sp-16', '64px', '--sp-16'],
      ['sp-24', '96px', '--sp-24'],
    ];
    const el = document.createElement('div');
    el.style.cssText = 'font-family:Inter,sans-serif;padding:40px;';
    el.innerHTML = scale.map(([name, value, varName]) => `
      <div style="display:flex;align-items:center;gap:24px;padding:10px 0;border-bottom:1px solid #f0f0f0;">
        <div style="width:80px;font-size:12px;font-weight:600;color:#111;">${name}</div>
        <div style="width:48px;font-size:12px;color:#888;">${value}</div>
        <div style="width:${value};height:${value};min-width:4px;min-height:4px;background:var(--twig-color-brand-default);border-radius:2px;opacity:.7;"></div>
        <div style="font-size:11px;color:#bbb;">${varName}</div>
      </div>`).join('');
    return el;
  },
};

export const BorderRadius = {
  name: 'Border Radius',
  render: () => {
    const el = document.createElement('div');
    el.style.cssText = 'font-family:Inter,sans-serif;padding:40px;display:flex;gap:32px;align-items:flex-end;';
    el.innerHTML = [
      ['r-sm', '8px', '--r-sm'],
      ['r-md', '12px', '--r-md'],
      ['Pill', '100px', '100px'],
    ].map(([name, value, varName]) => `
      <div style="text-align:center;">
        <div style="width:80px;height:80px;background:var(--twig-color-brand-subtle);border:2px solid var(--twig-color-brand-default);border-radius:${value};margin-bottom:10px;"></div>
        <div style="font-size:12px;font-weight:600;color:#111;">${name}</div>
        <div style="font-size:11px;color:#888;">${value}</div>
        <div style="font-size:11px;color:#bbb;">${varName}</div>
      </div>`).join('');
    return el;
  },
};
