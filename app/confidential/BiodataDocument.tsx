/* Presentational marriage biodata — rendered as a formal "paper" document.
   Colours are self-contained (ivory paper / gold frame / maroon ink) so the
   document reads the same regardless of the site's light/dark theme. */

const C = {
  gold: '#b8860b',
  goldLight: '#d4af37',
  maroon: '#6e1423',
  ink: '#2b2b2b',
  muted: '#6b6b6b',
  paper: '#fffdf8',
  line: '#e6dcc3',
  rowAlt: '#faf6ec',
}

type Row = [string, string]

const personal: Row[] = [
  ['Name', 'Mosanna Jalal'],
  ['Place of Birth', 'Gaya, Bihar'],
  ['Age', '27 Years'],
  ['Height', '5′ 6″'],
  ['Caste', 'Eraqui'],
  ['Hobbies & Interests', 'Research & Business Optimization, Coding, Cooking'],
]

const education: Row[] = [
  ['Qualification', 'B.Tech — Electrical Engineering'],
  ['Institution', 'Asansol Engineering College, Asansol'],
]

const experience = [
  { role: 'Govt. Clerk', org: 'GBM College, Gaya', period: 'February 2024 – Present' },
  {
    role: 'Software Engineer / Full Stack Web Developer',
    org: 'Infobeans Technologies, Pune — Gigaspace IT Park',
    period: '2022 – 2024',
  },
  {
    role: 'Software Engineer / Full Stack Web Developer',
    org: 'InfoBeans Technologies, Indore — Crystal IT Park',
    period: '2021 – 2022',
  },
]

const family: Row[] = [
  ["Father's Name", 'Late Md. Jalaluddin'],
  ["Mother's Name", 'Late Mosarrat Jahan'],
  ['Sibling', 'One elder sister (Married) — Probationary Officer, Central Bank of India'],
]

function SectionHead({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-3">
      <span style={{ color: C.gold, fontSize: 14 }}>❖</span>
      <h2
        className="m-0 whitespace-nowrap"
        style={{
          fontSize: 15,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: C.maroon,
          fontWeight: 700,
        }}
      >
        {title}
      </h2>
      <span
        className="flex-1"
        style={{ height: 1, background: `linear-gradient(to right, ${C.gold}, transparent)` }}
      />
    </div>
  )
}

function DetailTable({ rows }: { rows: Row[] }) {
  return (
    <table className="w-full border-collapse" style={{ fontSize: 14 }}>
      <tbody>
        {rows.map(([k, v], i) => (
          <tr key={k} style={{ background: i % 2 === 1 ? C.rowAlt : 'transparent' }}>
            <td
              className="align-top"
              style={{ width: '38%', padding: '7px 8px', color: C.muted, fontWeight: 700, letterSpacing: '0.02em' }}
            >
              {k}
            </td>
            <td className="align-top" style={{ padding: '7px 8px', color: C.ink }}>
              {v}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function Corner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const base: React.CSSProperties = {
    position: 'absolute',
    width: 24,
    height: 24,
    opacity: 0.7,
    borderColor: C.maroon,
  }
  const map: Record<string, React.CSSProperties> = {
    tl: { top: -2, left: -2, borderTop: '3px solid', borderLeft: '3px solid' },
    tr: { top: -2, right: -2, borderTop: '3px solid', borderRight: '3px solid' },
    bl: { bottom: -2, left: -2, borderBottom: '3px solid', borderLeft: '3px solid' },
    br: { bottom: -2, right: -2, borderBottom: '3px solid', borderRight: '3px solid' },
  }
  return <span style={{ ...base, ...map[pos] }} />
}

export default function BiodataDocument() {
  return (
    <article
      className="bio-paper relative mx-auto w-full"
      style={{
        maxWidth: 720,
        background: C.paper,
        color: C.ink,
        fontFamily: 'Georgia, Cambria, "Times New Roman", serif',
        padding: 'clamp(14px, 3vw, 22px)',
        boxShadow: '0 22px 70px rgba(0,0,0,0.5)',
      }}
    >
      {/* Ornamental double frame */}
      <div
        className="relative"
        style={{ border: `2px solid ${C.gold}`, padding: 'clamp(18px, 4vw, 36px)' }}
      >
        <span
          className="pointer-events-none absolute"
          style={{ inset: 4, border: `1px solid ${C.goldLight}` }}
        />
        <Corner pos="tl" />
        <Corner pos="tr" />
        <Corner pos="bl" />
        <Corner pos="br" />

        {/* Bismillah */}
        <p
          className="text-center m-0 mb-1"
          style={{ color: C.maroon, fontSize: 22, letterSpacing: '0.5px' }}
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>
        <p
          className="text-center italic m-0"
          style={{ color: C.muted, fontSize: 12, marginBottom: 18 }}
        >
          In the name of Allah, the Most Gracious, the Most Merciful
        </p>

        {/* Title */}
        <header className="text-center mb-2">
          <span
            className="inline-block"
            style={{ letterSpacing: '6px', textTransform: 'uppercase', fontSize: 12, color: C.gold, marginBottom: 6 }}
          >
            Biodata
          </span>
          <h1 className="m-0" style={{ fontSize: 'clamp(26px, 6vw, 34px)', color: C.maroon, letterSpacing: 1 }}>
            Mosanna Jalal
          </h1>
          <p className="italic" style={{ margin: '6px 0 0', fontSize: 13, color: C.muted }}>
            Marriage Proposal
          </p>
        </header>

        {/* Divider */}
        <div className="flex items-center justify-center" style={{ margin: '16px 0 22px' }}>
          <span className="flex-1" style={{ height: 1, background: C.line }} />
          <span style={{ width: 9, height: 9, background: C.gold, transform: 'rotate(45deg)', margin: '0 10px' }} />
          <span className="flex-1" style={{ height: 1, background: C.line }} />
        </div>

        <section style={{ marginBottom: 20 }}>
          <SectionHead title="Personal Details" />
          <DetailTable rows={personal} />
        </section>

        <section style={{ marginBottom: 20 }}>
          <SectionHead title="Education" />
          <DetailTable rows={education} />
        </section>

        <section style={{ marginBottom: 20 }}>
          <SectionHead title="Work Experience" />
          {experience.map((e) => (
            <div
              key={e.role + e.period}
              style={{ padding: '9px 10px', borderLeft: `3px solid ${C.gold}`, marginBottom: 10, background: C.rowAlt }}
            >
              <div style={{ fontWeight: 700, color: C.maroon, fontSize: 14.5 }}>{e.role}</div>
              <div style={{ fontSize: 13.5 }}>{e.org}</div>
              <div style={{ fontSize: 12.5, color: C.muted, fontStyle: 'italic' }}>{e.period}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 20 }}>
          <SectionHead title="Family Details" />
          <DetailTable rows={family} />
        </section>

        <section style={{ marginBottom: 4 }}>
          <SectionHead title="Contact Details" />
          <div className="text-center" style={{ fontSize: 13.5, color: C.ink }}>
            <div style={{ marginBottom: 6 }}>
              <strong>Permanent Address:</strong>
              <br />
              Shanti Bagh Colony, New Karimganj, Gaya — 823001, Bihar
            </div>
            <div>
              <strong>Mobile:</strong> +91&nbsp;90654&nbsp;01524 &nbsp;&nbsp;|&nbsp;&nbsp;
              <strong>Web:</strong>{' '}
              <a href="https://me-mj.vercel.app" style={{ color: C.maroon, textDecoration: 'none' }}>
                me-mj.vercel.app
              </a>
            </div>
          </div>
        </section>

        <p className="text-center italic" style={{ marginTop: 16, color: C.gold, fontSize: 13 }}>
          — In sha’ Allah, a blessed union —
        </p>
      </div>
    </article>
  )
}
