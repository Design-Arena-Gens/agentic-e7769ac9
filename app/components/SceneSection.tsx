import styles from "./SceneSection.module.css";

export type SceneDescriptor = {
  heading: string;
  body: string;
};

export type Scene = {
  id: string;
  label: string;
  title: string;
  timecode: string;
  tagline: string;
  descriptors: SceneDescriptor[];
  details: string[];
  palette: string[];
  backdrop: string;
  gradient: string;
  aura: string;
};

type SceneSectionProps = {
  scene: Scene;
};

export function SceneSection({ scene }: SceneSectionProps) {
  return (
    <section
      className={styles.section}
      aria-labelledby={`${scene.id}-title`}
    >
      <div
        className={styles.backdrop}
        style={{ background: scene.backdrop }}
        aria-hidden="true"
      />
      <div
        className={styles.gradientOverlay}
        style={{ background: scene.gradient }}
        aria-hidden="true"
      />
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.surface}>
        <header className={styles.meta}>
          <span className={styles.eyebrow}>
            <span className={styles.timecode}>{scene.timecode}</span>
            {scene.label}
          </span>
          <h2 className={styles.title} id={`${scene.id}-title`}>
            {scene.title}
          </h2>
          <p className={styles.tagline}>{scene.tagline}</p>
        </header>
        <aside className={styles.infoPanel}>
          {scene.descriptors.map((descriptor) => (
            <div className={styles.descriptor} key={descriptor.heading}>
              <h3>{descriptor.heading}</h3>
              <p>{descriptor.body}</p>
            </div>
          ))}
          <div className={styles.descriptor}>
            <h3>Visual Direction</h3>
            <ul className={styles.details}>
              {scene.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className={styles.descriptor}>
            <h3>Palette</h3>
            <div className={styles.paletteRow}>
              {scene.palette.map((color) => (
                <span
                  key={color}
                  className={styles.swatch}
                  style={{ background: color }}
                  aria-label={`Color swatch ${color}`}
                />
              ))}
            </div>
            <span className={styles.note}>
              Color keys reference Kodachrome film stocks for period fidelity.
            </span>
          </div>
        </aside>
      </div>
      <span
        className={styles.aura}
        style={{ background: scene.aura }}
        aria-hidden="true"
      />
    </section>
  );
}
