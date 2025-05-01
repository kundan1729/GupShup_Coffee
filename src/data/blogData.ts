import { BlogPost } from '../types/menu';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Story of Cutting Chai',
    excerpt: 'Discover the history and culture behind Mumbai\'s famous cutting chai and why it\'s more than just a beverage.',
    content: `
      <p>The term "cutting chai" is deeply rooted in Mumbai's fast-paced culture. In a city where time is money, cutting chai emerged as a practical solution for tea lovers. Served in small glasses, typically half the size of a regular cup, it allows people to enjoy their tea quickly without compromising on taste or experience.</p>
      
      <p>The name "cutting" comes from the concept of cutting a full cup into half portions. This not only makes it more affordable but also perfect for a quick tea break. The strong, aromatic concoction is brewed with intense spices and served piping hot - a perfect companion for Mumbai's hustle.</p>
      
      <p>For many Mumbaikars, cutting chai is more than just tea; it's a cultural institution that brings people together. From office workers during breaks to friends catching up at street corners, these small glasses of chai facilitate countless conversations and connections every day.</p>
      
      <p>The next time you're in Mumbai, make sure to experience this cultural phenomenon. Stand at a local tea stall, ask for a "cutting" and witness how this humble beverage brings strangers together in momentary camaraderie.</p>
    `,
    author: 'Priya Sharma',
    date: 'February 15, 2025',
    image: 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'story-of-cutting-chai'
  },
  {
    id: 2,
    title: 'Why Filter Coffee is an Emotion in South India',
    excerpt: 'Exploring the cultural significance of filter coffee in South Indian households and how it has evolved over generations.',
    content: `
      <p>In South India, filter coffee isn't just a beverage; it's an emotion, a tradition passed down through generations, and a cultural touchstone that defines mornings for millions. The ritual of preparing and serving filter coffee has been elevated to an art form that goes beyond mere consumption.</p>
      
      <p>The preparation begins with freshly ground coffee beans mixed with chicory. This mixture is then brewed in a traditional stainless steel filter consisting of two chambers. The resulting decoction is mixed with hot milk and sugar, then poured back and forth between a tumbler and davara (cup) to create a frothy, aromatic coffee that awakens the senses.</p>
      
      <p>For South Indians, particularly in Tamil Nadu and Karnataka, filter coffee represents home, family, and heritage. The familiar aroma wafting through the house announces the start of a new day, bringing family members together around the breakfast table. Many people report that no modern coffee shop brew can match the emotional connection they feel with homemade filter coffee.</p>
      
      <p>Even as global coffee chains expand across India, the tradition of filter coffee remains strong. Young people who may frequent modern cafes still return to filter coffee as a comfort drink that connects them to their roots. In this way, this humble brew has become a symbol of cultural identity and continuity in a rapidly changing world.</p>
    `,
    author: 'Karthik Iyengar',
    date: 'March 5, 2025',
    image: 'https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'filter-coffee-emotion'
  },
  {
    id: 3,
    title: 'The Art of Brewing Perfect Chai',
    excerpt: 'Master the techniques to brew the perfect cup of chai at home with these traditional methods and tips.',
    content: `
      <p>Brewing the perfect cup of chai is both a science and an art form. While every family in India has their own secret recipe passed down through generations, there are some fundamental principles that can help you create that authentic taste at home.</p>
      
      <p>The journey begins with quality ingredients: fresh water, good tea leaves (preferably Assam CTC tea for its strong flavor), fresh whole milk, and a balanced blend of spices. The classic spice mix or "masala" typically includes cardamom, cinnamon, ginger, cloves, and black pepper, though regional variations abound.</p>
      
      <p>The brewing process is where the magic happens. Unlike Western tea preparation, chai involves boiling the tea leaves with water and spices rather than just steeping them. This extraction method releases the full flavor profile of both tea and spices. The addition of milk and how long you allow the mixture to simmer determines the richness and body of your chai.</p>
      
      <p>For that perfect cup, consider these tips from chai masters: crush your spices fresh rather than using pre-ground ones, don't rush the simmering process, and adjust the tea-to-milk ratio based on your preference for strength. Remember, the perfect chai is ultimately the one that tastes best to you!</p>
    `,
    author: 'Rajesh Kumar',
    date: 'January 28, 2025',
    image: 'https://images.pexels.com/photos/5946975/pexels-photo-5946975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'art-of-brewing-chai'
  },
  {
    id: 4,
    title: 'Tea Gardens of Darjeeling: A Journey',
    excerpt: 'Explore the misty tea gardens of Darjeeling and learn about the people who craft some of the world\'s finest teas.',
    content: `
      <p>Nestled in the foothills of the Himalayas, Darjeeling's tea gardens present one of the most breathtaking landscapes in India. The region's unique geography—high altitude, cool climate, abundant rainfall, and misty conditions—creates the perfect environment for growing what is often called the "champagne of teas."</p>
      
      <p>A journey through Darjeeling's tea estates is a sensory experience like no other. As you wind through the hillsides covered with neat rows of tea bushes, you'll notice the air becoming progressively cleaner and crisper. The morning mist that envelops these gardens isn't just scenic—it's an essential factor that contributes to the distinctive muscatel flavor that Darjeeling tea is famous for.</p>
      
      <p>Behind every cup of Darjeeling tea are the skilled hands of tea pluckers, predominantly women, who carefully select just the top two leaves and a bud. This meticulous harvesting method, combined with traditional processing techniques, preserves the delicate flavor profile that tea connoisseurs around the world cherish.</p>
      
      <p>Visitors to Darjeeling can tour many of these historic tea estates, some dating back to the 1850s. Beyond just tasting the teas, you can witness the entire journey from leaf to cup: the plucking in the fields, the withering of leaves, the rolling, oxidation, and finally the drying process. It's a journey that deepens one's appreciation for what might otherwise be taken for granted—the humble cup of tea.</p>
    `,
    author: 'Amrita Sen',
    date: 'April 12, 2025',
    image: 'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'darjeeling-tea-gardens'
  }
];

export const getRecentPosts = (count = 3) => {
  return blogPosts.slice(0, count);
};

export const getPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};