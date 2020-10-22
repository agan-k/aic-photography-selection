import garry from '../assets/garry2.jpeg'
import diane from '../assets/diane.jpg'
import koudelka from '../assets/koudelka.jpg'

const photogsData = [
   {
      id: 1,
      api: 'https://aggregator-data.artic.edu/api/v1/artworks/search?q=winogrand&limit=50',
      name: 'Garry Winogrand',
      bio_pic: garry,
      about_body: [
         `<p><strong>Garry Winogrand</strong> (14 January 1928 – 19 March 1984) was an American street photographer
         from the Bronx, New York, known for his portrayal of U.S. life and its social issues, in
         the mid-20th century. Though he photographed in California, Texas and elsewhere, Winogrand
         was essentially a New York photographer.<br></br>`,

         `He received three <strong>Guggenheim Fellowships</strong> to work on personal projects, a fellowship from the
        <strong>National Endowment for the Arts</strong>, and published four books during his lifetime. He was one
        of three photographers featured in the influential New Documents exhibition at <strong>Museum of Modern
        Art in New York</strong> in 1967 and had solo exhibitions there in 1969, 1977, and 1988. He supported
        himself by working as a freelance photojournalist and advertising photographer in the 1950s and
        1960s, and taught photography in the 1970s. His photographs featured in photography magazines
        including Popular Photography, Eros, Contemporary Photographer, and Photography Annual.<br></br>`,
         
         `Photography curator, historian, and critic <strong>John Szarkowski</strong> called Winogrand the central photographer
         of his generation. Critic Sean O'Hagan, writing in The Guardian in 2014, said <em>"In the 1960s
         and 70s, he defined street photography as an attitude as well as a style – and it has laboured in
         his shadow ever since, so definitive are his photographs of New York."</em> Phil Coomes, writing for
         BBC News in 2013, said <em>"For those of us interested in street photography there are a few names that
         stand out and one of those is Garry Winogrand, whose pictures of New York in the 1960s are a
         photographic lesson in every frame.`,

         `At the time of his death Winogrand's late work remained undeveloped, with about 2,500 rolls of
         undeveloped film, 6,500 rolls of developed but not proofed exposures, and about 3,000 rolls only
         realized as far as contact sheets being made.`,
      ],
      link_url: '',
      link_desc: ''
   },
   {
      id: 2,
      api: 'https://aggregator-data.artic.edu/api/v1/artworks/search?q=winogrand&limit=50',
      name: 'Diane Arbus',
      bio_pic: diane,
      about_body: [
         `Diane Arbus (March 14, 1923 – July 26, 1971) was an
         American photographer. Arbus worked to normalize marginalized groups and
         highlight the importance of proper representation of all people. She
         worked with a wide range of subjects including members of the LGBTQ+
         community, strippers, carnival performers, nudists, dwarves, children,
         mothers, couples, elderly people, and middle-class families. She
         photographed her subjects in familiar settings: their homes, on the
         street, in the workplace, in the park. “She is noted for expanding
         notions of acceptable subject matter and violates canons of the
         appropriate distance between photographer and subject. By befriending,
         not objectifying her subjects, she was able to capture in her work a
         rare psychological intensity”. In his 2003 New York Times Magazine 
         article, "Arbus Reconsidered," <strong>Arthur Lubow</strong> states, <em>"She was fascinated
         by people who were visibly creating their own identities—cross-dressers,
         nudists, sideshow performers, tattooed men, the nouveau riche, the
         movie-star fans—and by those who were trapped in a uniform that no
         longer provided any security or comfort."</em> <strong>Michael Kimmelman</strong> writes in
         his review of the exhibition Diane Arbus Revelations, <em>"Her memorable
         work, which she did, on the whole, not for hire but for herself, was all
         about heart—a ferocious, audacious heart. It transformed the art of
         photography (Arbus is everywhere, for better and worse, in the work of
         artists today who make photographs), and it lent a fresh dignity to the
         forgotten and neglected people in whom she invested so much of herself."</em>`,

         `In her lifetime she achieved some recognition and renown with the
         publication, beginning in 1960, of photographs in such magazines as
         <strong>Esquire, Harper’s Bazaar</strong>, London's <strong>Sunday Times Magazine</strong>, and <strong>Artforum</strong>.
         In 1963 the <strong></strong>Guggenheim Foundation awarded Arbus a fellowship for her
         proposal entitled, "American Rites, Manners and Customs". She was
         awarded a renewal of her fellowship in 1966. <strong>John Szarkowski</strong>, the
         director of photography at the <strong>Museum of Modern Art</strong> (MoMA) in New York
         City from 1962 to 1991, championed her work and included it in his 1967
         exhibit New Documents along with the work of Lee Friedlander and Garry
         Winogrand. Her photographs were also included in a number of other major
         group shows.`,

         `The first major retrospective of Arbus' work was held in 1972 at MoMA,
        organized by Szarkowski. The retrospective garnered the highest
        attendance of any exhibition in MoMA's history to date. Millions
        viewed traveling exhibitions of her work from 1972 to 1979. The book
        accompanying the exhibition, Diane Arbus: An Aperture Monograph, edited
        by Doon Arbus and Marvin Israel and first published in 1972 has never
        been out of print.`,
         
         `The first major retrospective of Arbus' work was held in 1972 at MoMA,
         organized by Szarkowski. The retrospective garnered the highest
         attendance of any exhibition in MoMA's history to date. Millions
         viewed traveling exhibitions of her work from 1972 to 1979. The book
         accompanying the exhibition, Diane Arbus: An Aperture Monograph, edited
         by Doon Arbus and Marvin Israel and first published in 1972 has never
         been out of print.`,
      ],
      link_url: '',
      link_desc: ''
   },
   {
      id: 3,
      api: 'https://aggregator-data.artic.edu/api/v1/artworks/search?q=winogrand&limit=50',
      name: 'Josef Koudelka',
      bio_pic: koudelka,
      about_body: [
         `Koudelka was born in 1938 in the small Moravian town of Boskovice, Czechoslovakia. He began 
         photographing his family and the surroundings with a 6×6 Bakelite camera. He studied at the 
         Czech Technical University in Prague (ČVUT) between 1956 and 1961, receiving a degree in 
         engineering in 1961. He staged his first photographic exhibition the same year. Later he worked 
         as an aeronautical engineer in Prague and Bratislava. Koudelka began taking commissions from 
         theatre magazines, and regularly photographed stage productions at Prague's Theatre Behind the 
         Gate on a Rolleiflex camera. In 1967, he decided to give up his career in engineering for full-time 
         work as a photographer.`,

         `He had returned from a project photographing gypsies in Romania just two days before the Soviet
         invasion, in August 1968. He witnessed and recorded the military forces of the Warsaw Pact as they
         invaded Prague and crushed reforms of the so-called Prague Spring. Koudelka's negatives were smuggled
         out of Prague to the Magnum agency, and published anonymously in The Sunday Times Magazine under the
         initials P. P. (Prague Photographer) for fear of reprisal to him and his family. Koudelka's pictures
         of the events became dramatic international symbols. In 1969 the "anonymous Czech photographer" was
         awarded the <strong>Overseas Press Club's Robert Capa Gold Medal</strong> for photographs requiring 
         exceptional courage.`,

         `Throughout the 1970s and 1980s, Koudelka sustained his work through numerous grants and awards, and
         continued to exhibit and publish major projects like Gypsies (1975) and Exiles (1988). Since 1986, he
         has worked with a panoramic camera and issued a compilation of these photographs in his book Chaos in
         1999. Koudelka has had many books of his work published, including in 2006 the retrospective volume
         Koudelka. Koudelka has won awards such as the <strong>Prix Nadar</strong> (1978), a <strong>Grand Prix
         National de la Photographie</strong> (1989), a <strong>Grand Prix Cartier-Bresson</strong> (1991), and
         the <strong>Hasselblad Foundation International Award in Photography</strong> (1992). Significant
         exhibitions of his work have been held at the <strong>Museum of Modern Art</strong> and the
         <strong>International Center of Photography</strong>, New York; the <strong>Hayward Gallery</strong>,
         London; the <strong>Stedelijk Museum of Modern Art</strong>, Amsterdam; and the <strong>Palais de
         Tokyo</strong>, Paris.`,
      ],
      link_url: '',
      link_desc: ''
   },
   // {
   //    id: number,
   //    name: 'name',
   //    bio_pic: name,
   //    about_body: [
   //       ``,

   //       ``,

   //       ``,

   //       ``,
   //    ],
   //    link_url: '',
   //    link_desc: ''
   // },
  

]
export default photogsData