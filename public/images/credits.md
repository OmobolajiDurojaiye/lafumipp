# Photo credits & Visual Proposal

All stock photographs are downloaded into `/public/images` and served locally via `next/image` (no hotlinking).
Sources: Unsplash (https://unsplash.com/license) and Pexels (https://www.pexels.com/license/), free for commercial use.

| File | Used on | Subject | Source |
| --- | --- | --- | --- |
| `logo.png` | Navbar (scrolled), Founder slot, Open Graph, Favicons | Official LAFUMIPP, LLC logo (255x210) | Client supplied |
| `logo-white.png` | Navbar (hero overlay), Footer watermark | White transparent version of LAFUMIPP, LLC logo (255x210) | Generated from `logo.png` |
| `hero-team.jpg` | Home hero, How We Work carousel | Professionals in a candid office meeting | https://images.pexels.com/photos/8463151/pexels-photo-8463151.jpeg |
| `project-management.jpg` | Project Management hero & division block | Engineers reviewing blueprints on a construction site | https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg |
| `facilities.jpg` | Facilities & Construction hero & division block | Engineer inspecting stainless steel facility equipment | https://images.unsplash.com/photo-1748348389780-3eb3ce44ac65 |
| `bookkeeping.jpg` | Bookkeeping & Tax Preparation hero & division block | Hands reviewing tax and bookkeeping forms with calculator | https://images.unsplash.com/photo-1772588627373-729b0f47e5bb |
| `grow.jpg` | Grow with Adejoke hero & division block | Two professionals in a candid coaching conversation | https://images.pexels.com/photos/12903168/pexels-photo-12903168.jpeg |
| `home-services.jpg` | LAFUMIPP Home Services hero & division block | Trade technician holding a cordless drill | https://images.pexels.com/photos/5767926/pexels-photo-5767926.jpeg |

## Visual Proposal: Photos to Supply from Client

To replace the neutral founder placeholder and stock photography over time, we recommend supplying 6 original photos:

1. **Founder Portrait (`public/images/founder.jpg`, 1200 x 1500 px, 4:5 vertical)**
   - **Subject**: Adejoke Adeniran in business attire against a clean, well-lit neutral wall or office setting.
   - **Where it goes**: Set `founderPhoto: "/images/founder.jpg"` in `src/config/site.config.ts` to populate both the Home page and About page founder slots automatically.
2. **Active Project Walkthrough (`public/images/project-management.jpg`)**
3. **Mechanical / Facility Inspection (`public/images/facilities.jpg`)**
4. **Workspace & Financial Organization (`public/images/bookkeeping.jpg`)**
5. **Coaching & Goal Planning Session (`public/images/grow.jpg`)**
6. **Team & Maryland Commercial Architecture (`public/images/hero-team.jpg`)**
