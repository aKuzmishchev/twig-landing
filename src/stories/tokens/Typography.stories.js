export default {
  title: 'Tokens/Typography',
  parameters: { options: { showPanel: false }, layout: 'fullscreen', backgrounds: { default: 'white' } },
};

const row = (name, style, sample) => `
  <div style="padding:20px 0;border-bottom:1px solid #f0f0f0;">
    <div style="font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#bbb;margin-bottom:10px;">${name}</div>
    <div style="${style}">${sample}</div>
    <div style="font-size:11px;color:#ccc;margin-top:6px;">${style.replace(/;/g, ' · ')}</div>
  </div>`;

export const TypeScale = {
  name: 'Type Scale',
  render: () => {
    const el = document.createElement('div');
    el.style.cssText = 'font-family:Inter,sans-serif;padding:40px;max-width:800px;';
    el.innerHTML = [
      row('Display (Hero Headline)', 'font-size:60px;font-weight:800;line-height:1.1;letter-spacing:-.025em;color:#111;', 'Turn fragmented ops into profit'),
      row('Heading — Section', 'font-size:32px;font-weight:600;line-height:1.18;letter-spacing:-.01em;color:#111;', 'Restaurants run on razor-thin margins'),
      row('Heading — Pillar', 'font-size:38px;font-weight:700;line-height:1.18;letter-spacing:-.02em;color:#111;', 'Drive revenue growth and margin expansion'),
      row('Subheading', 'font-size:18px;font-weight:600;line-height:27px;color:#111;', 'Connect'),
      row('Body Large (Hero sub)', 'font-size:20px;font-weight:500;line-height:30px;color:#6B7280;', 'Twig unifies your restaurant data into an AI layer that acts — not just reports.'),
      row('Body', 'font-size:16px;font-weight:400;line-height:24px;color:#6B7280;', 'Fragmented systems, invisible losses, and operational inefficiencies hit directly where it hurts most.'),
      row('Body Small', 'font-size:14px;font-weight:400;line-height:21px;color:#6B7280;', 'Plug in your existing POS, inventory, and finance systems in minutes.'),
      row('Label (Section)', 'font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--twig-color-brand-default);', 'How it works'),
      row('Label Small', 'font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#AEAEAE;', '01'),
      row('Caption / Source', 'font-size:11px;font-weight:500;letter-spacing:.02em;color:#AEAEAE;', 'Toast, 2025'),
    ].join('');
    return el;
  },
};

export const FontWeights = {
  name: 'Font Weights',
  render: () => {
    const el = document.createElement('div');
    el.style.cssText = 'font-family:Inter,sans-serif;padding:40px;max-width:600px;';
    el.innerHTML = [400, 500, 600, 700, 800].map(w =>
      `<div style="padding:16px 0;border-bottom:1px solid #f0f0f0;">
        <span style="font-size:11px;color:#bbb;margin-right:16px;">${w}</span>
        <span style="font-size:24px;font-weight:${w};color:#111;">Inter ${w}</span>
      </div>`
    ).join('');
    return el;
  },
};
