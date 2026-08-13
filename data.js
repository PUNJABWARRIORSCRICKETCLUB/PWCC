/* =========================================================
   PUNJAB WARRIORS — CENTRAL EDITABLE DATA
   Change team/player/match/news/gallery/sponsor/social data here.
   ========================================================= */
const SITE_DATA = {
  team: {
    name: "Punjab Warriors Cricket Club",
    shortName: "Punjab Warriors",
    founded: "2026",
    homeGround: "Coming Soon",
    captain: "Coming Soon",
    league: "Coming Soon",
    season: "2027/28",
    email: "TEAMPUNJABWARRIORS@GMAIL.COM",
    phone: "Coming Soon",
    location: "Ontario, Canada",
    mission: "To build a disciplined, competitive cricket culture where talented players grow, compete and represent the Warriors with pride.",
    vision: "To become a respected cricket franchise known for excellence, community, professionalism and a relentless Warrior spirit.",
    values: "Passion, discipline, teamwork, respect and the Warrior spirit."
  },

  registrationForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSdOBBSJ1fkvtsM-4A34RAxqgZl9VwymNo0kwcr1wdmJ264JQw/viewform?usp=header",

  social: {
    youtube: "https://www.youtube.com/@PUNJABWARRIORSCRICKETCLUB",
    email: "mailto:TEAMPUNJABWARRIORS@GMAIL.COM",
    tiktok: "https://www.tiktok.com/@punjab.warriors.c?lang=en",
    instagram: "https://www.instagram.com/punjabwarriors_cc/",
    facebook: "https://www.facebook.com/profile.php?id=61593089097508",
    snapchat: "https://snapchat.com/t/pSPeTXd0",
    whatsapp: "https://wa.me/0000000000" // Replace with the team's WhatsApp number.
  },

  assets: {
    mainLogo: "assets/main-logo.png",
    loaderLogo: "assets/loader-logo.png",
    uniform: "assets/coming-soon-jersey.svg",
    playerPlaceholder: "assets/coming-soon-player.svg",
    openGraph: "assets/main-logo.png",
    favicon: "assets/main-logo.png"
  },

  /* Replace these URLs with your own stadium photographs if desired. */
  heroSlides: [
    "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=2200&q=85",
    "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=2200&q=85",
    "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=2200&q=85"
  ],

  players: [
    {
      id: "warrior-01", name: "Player Name", number: "07", role: "Batter",
      category: "Batters", batting: "Right Hand", bowling: "N/A",
      image: "assets/coming-soon-player.svg",
      bio: "Replace this with the player's professional biography.",
      matches: 0, runs: 0, wickets: 0, bestScore: "-", bestBowling: "-",
      strikeRate: "-", average: "-", socials: { instagram: "#" }
    },
    {
      id: "warrior-02", name: "All-Rounder Name", number: "18", role: "All-Rounder",
      category: "All-Rounders", batting: "Right Hand", bowling: "Right Arm Medium",
      image: "assets/coming-soon-player.svg",
      bio: "Replace this with the player's professional biography.",
      matches: 0, runs: 0, wickets: 0, bestScore: "-", bestBowling: "-",
      strikeRate: "-", average: "-", socials: { instagram: "#" }
    },
    {
      id: "warrior-03", name: "Bowler Name", number: "99", role: "Bowler",
      category: "Bowlers", batting: "Left Hand", bowling: "Right Arm Fast",
      image: "assets/coming-soon-player.svg",
      bio: "Replace this with the player's professional biography.",
      matches: 0, runs: 0, wickets: 0, bestScore: "-", bestBowling: "-",
      strikeRate: "-", average: "-", socials: { instagram: "#" }
    },
    {
      id: "warrior-04", name: "Keeper Name", number: "01", role: "Wicket Keeper",
      category: "Wicket Keepers", batting: "Right Hand", bowling: "N/A",
      image: "assets/coming-soon-player.svg",
      bio: "Replace this with the player's professional biography.",
      matches: 0, runs: 0, wickets: 0, bestScore: "-", bestBowling: "-",
      strikeRate: "-", average: "-", socials: { instagram: "#" }
    }
  ],

  fixtures: [
    {id:1,status:"upcoming",opponent:"Opponent XI",opponentLogo:"assets/coming-soon-match.svg",date:"2027-05-15",time:"2:00 PM",venue:"Coming Soon",league:"Coming Soon",details:"Match details coming soon."},
    {id:2,status:"upcoming",opponent:"Opponent XI",opponentLogo:"assets/coming-soon-match.svg",date:"2027-05-22",time:"2:00 PM",venue:"Coming Soon",league:"Coming Soon",details:"Match details coming soon."}
  ],

  results: [
    {id:1,opponent:"Opponent XI",opponentLogo:"assets/coming-soon-match.svg",pwScore:"0/0",oppScore:"0/0",winner:"Coming Soon",playerOfMatch:"Coming Soon",venue:"Coming Soon",date:"2027-01-01",scorecard:"#",
      mvp:{name:"Coming Soon",image:"assets/coming-soon-player.svg",performance:"Performance to be added",runs:"-",wickets:"-",strikeRate:"-",match:"Opponent XI"}}
  ],

  standings: [
    {pos:1,team:"Punjab Warriors",p:0,w:0,l:0,nr:0,pts:0,nrr:"0.000",highlight:true},
    {pos:2,team:"Team Alpha",p:0,w:0,l:0,nr:0,pts:0,nrr:"0.000"},
    {pos:3,team:"Team Bravo",p:0,w:0,l:0,nr:0,pts:0,nrr:"0.000"},
    {pos:4,team:"Team Charlie",p:0,w:0,l:0,nr:0,pts:0,nrr:"0.000"}
  ],

  news: [
    {category:"Club News",title:"Welcome to Punjab Warriors",date:"2026-08-13",image:"assets/coming-soon-news.svg",description:"This is your first editable club-news story. Replace it with official team updates.",link:"#"},
    {category:"Team News",title:"The Warrior Journey Begins",date:"2026-08-13",image:"assets/coming-soon-news.svg",description:"Use this area for match announcements, signings, training updates and sponsor news.",link:"#"},
    {category:"Community",title:"Built for Cricket. Built for Community.",date:"2026-08-13",image:"assets/coming-soon-news.svg",description:"Add community stories and club announcements here.",link:"#"}
  ],

  gallery: [
    {category:"Team",image:"assets/coming-soon-gallery.svg",title:"Team Photo Coming Soon"},
    {category:"Behind The Scenes",image:"assets/coming-soon-gallery.svg",title:"Behind The Scenes Coming Soon"},
    {category:"Players",image:"assets/coming-soon-gallery.svg",title:"Player Photo Coming Soon"},
    {category:"Match Day",image:"assets/coming-soon-gallery.svg",title:"Match Day Coming Soon"},
    {category:"Training",image:"assets/coming-soon-gallery.svg",title:"Training Photo Coming Soon"},
    {category:"Fans",image:"assets/coming-soon-gallery.svg",title:"Fan Photo Coming Soon"}
  ],

  videos: [
    {title:"Add Match Highlights",category:"Match Highlights",youtube:"https://www.youtube.com/@PUNJABWARRIORSCRICKETCLUB"},
    {title:"Add Training Video",category:"Training",youtube:"https://www.youtube.com/@PUNJABWARRIORSCRICKETCLUB"},
    {title:"Add Jersey Reveal",category:"Jersey Reveal",youtube:"https://www.youtube.com/@PUNJABWARRIORSCRICKETCLUB"}
  ],

  sponsors: {
    "Title Partner": [{name:"Your Title Partner",logo:"assets/coming-soon-sponsor.svg",url:"#"}],
    "Gold Partners": [{name:"Gold Partner",logo:"assets/coming-soon-sponsor.svg",url:"#"}],
    "Silver Partners": [{name:"Silver Partner",logo:"assets/coming-soon-sponsor.svg",url:"#"}],
    "Official Partners": [{name:"Official Partner",logo:"assets/coming-soon-sponsor.svg",url:"#"}],
    "Community Partners": [{name:"Community Partner",logo:"assets/coming-soon-sponsor.svg",url:"#"}]
  }
};
