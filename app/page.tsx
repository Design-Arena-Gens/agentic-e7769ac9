import { SceneSection, type Scene } from "./components/SceneSection";

const scenes: Scene[] = [
  {
    id: "dream-suburb",
    label: "Prompt 01 · The Dream Suburb",
    title: "The Dream Suburb",
    timecode: "00:00",
    tagline:
      "A cinematic 35mm glide through a pristine mid-century neighborhood bathed in honeyed sunset light.",
    descriptors: [
      {
        heading: "Camera Move",
        body: "Slow tracking follow on the station wagon with gentle parallax from foreground hedges."
      },
      {
        heading: "Mood",
        body: "Nostalgic optimism, quiet domestic joy, the serenity of a postcard-perfect evening."
      },
      {
        heading: "Format",
        body: "Kodachrome-inspired home-movie texture, warm highlights, soft anamorphic flare."
      }
    ],
    details: [
      "Bright red station wagon cruising past manicured emerald lawns and white picket fences.",
      "Children dashing through sprinklers in the deep field, playing as streaks of motion blur.",
      "Maple trees casting long shadows while the sun rims the car in a glowing outline."
    ],
    palette: ["#ffb347", "#ffd773", "#f4f0e2", "#2f7b5e", "#c5312f"],
    backdrop:
      "radial-gradient(circle at 20% 20%, rgba(255, 220, 178, 0.8), rgba(21, 41, 49, 0.9)), linear-gradient(135deg, rgba(255, 122, 89, 0.6), rgba(30, 77, 68, 0.9))",
    gradient:
      "radial-gradient(circle at 35% 30%, rgba(255, 238, 197, 0.55), transparent 55%), radial-gradient(circle at 80% 40%, rgba(255, 95, 109, 0.4), transparent 60%), linear-gradient(120deg, rgba(14, 17, 21, 0.6), rgba(10, 12, 16, 0.85))",
    aura: "radial-gradient(circle, rgba(255, 183, 76, 0.4), transparent 65%)"
  },
  {
    id: "booming-metropolis",
    label: "Prompt 02 · The Booming Metropolis",
    title: "The Booming Metropolis",
    timecode: "00:15",
    tagline:
      "An energetic tilt from gleaming skyscraper peaks to a street racing with yellow cabs and suited commuters.",
    descriptors: [
      {
        heading: "Camera Move",
        body: "Vertigo-inducing tilt down from reflective glass façade into bustling street-level chaos."
      },
      {
        heading: "Mood",
        body: "Charged, victorious, celebrating the relentless drive of 1960s New York ambition."
      },
      {
        heading: "Format",
        body: "Technicolor crispness, high contrast reflections, razor-sharp architecture detailing."
      }
    ],
    details: [
      "Sun slicing across the skyscraper, clouds mirrored in endless panes of glass.",
      "Vintage yellow taxis streaking through crosswalks with motion-blurred highlights.",
      "Grey-suited businessmen flowing across sidewalks like synchronized choreography."
    ],
    palette: ["#8ed0ff", "#1d2d50", "#fed766", "#f05d5e", "#0b141f"],
    backdrop:
      "linear-gradient(160deg, rgba(20, 28, 58, 0.92) 10%, rgba(52, 125, 194, 0.75) 55%, rgba(10, 10, 20, 0.95) 100%)",
    gradient:
      "radial-gradient(circle at 65% 10%, rgba(142, 208, 255, 0.55), transparent 60%), radial-gradient(circle at 30% 75%, rgba(240, 93, 94, 0.4), transparent 60%), linear-gradient(120deg, rgba(8, 10, 16, 0.65), rgba(4, 6, 12, 0.9))",
    aura: "radial-gradient(circle, rgba(142, 208, 255, 0.35), transparent 60%)"
  },
  {
    id: "space-age-pavilion",
    label: "Prompt 03 · The Space-Age Pavilion",
    title: "The Space-Age Pavilion",
    timecode: "00:30",
    tagline:
      "A reveal of a World's Fair pavilion where futuristic chrome meets optimistic mid-century modern design.",
    descriptors: [
      {
        heading: "Camera Move",
        body: "Sweeping crane move wrapping around the pavilion, gliding through suspended monorail beams."
      },
      {
        heading: "Mood",
        body: "Forward-looking wonder, the thrill of innovation, reverence for human ingenuity."
      },
      {
        heading: "Format",
        body: "Vibrant expo lighting, reflective chrome flares, saturated jewel tones with subtle halation."
      }
    ],
    details: [
      "Families pointing toward rocket-inspired sculptures framed against twilight gradients.",
      "Glass-domed atrium shimmering with kinetic light projections on polished terrazzo.",
      "Uniformed guides silhouetted as the monorail swoops through the background."
    ],
    palette: ["#64c3ff", "#c2f970", "#f9edff", "#5260ff", "#f36c8c"],
    backdrop:
      "linear-gradient(145deg, rgba(32, 44, 82, 0.92) 0%, rgba(99, 180, 255, 0.7) 55%, rgba(208, 104, 181, 0.75) 100%)",
    gradient:
      "radial-gradient(circle at 15% 20%, rgba(99, 180, 255, 0.5), transparent 60%), radial-gradient(circle at 75% 60%, rgba(243, 108, 140, 0.45), transparent 65%), linear-gradient(115deg, rgba(18, 20, 39, 0.7), rgba(8, 8, 22, 0.92))",
    aura: "radial-gradient(circle, rgba(99, 180, 255, 0.4), transparent 60%)"
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <span className="hero__badge">
          <span role="img" aria-label="film camera">
            🎥
          </span>
          Mid-Century Motion Treatment
        </span>
        <h1 className="hero__title">A Cinematic Journey Through 1960s America</h1>
        <p className="hero__subtitle">
          Three sweeping storyboard moments explore the evolution of mid-century life.
          From suburban tranquility to metropolitan momentum and the promise of tomorrow,
          each vignette is tuned for 35mm nostalgia and Vercel-ready storytelling.
        </p>
      </section>

      <div className="scene-grid">
        {scenes.map((scene) => (
          <SceneSection key={scene.id} scene={scene} />
        ))}
      </div>

      <footer>
        Curated for concept artists, directors, and AI prompt designers seeking richly
        articulated mid-century cinematic worlds.
      </footer>
    </main>
  );
}
