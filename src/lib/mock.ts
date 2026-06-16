// Mock data for MyDesignGhar — UI demo only.

export const img = (seed: string, w = 800, h = 600) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;

export interface RoomType {
  id: string;
  name: string;
  emoji: string;
  seed: string;
}

export const roomTypes: RoomType[] = [
  { id: "living", name: "Living Room", emoji: "🛋️", seed: "mdg-living" },
  { id: "bedroom", name: "Bedroom", emoji: "🛏️", seed: "mdg-bedroom" },
  { id: "kitchen", name: "Kitchen", emoji: "🍳", seed: "mdg-kitchen" },
  { id: "bathroom", name: "Bathroom", emoji: "🛁", seed: "mdg-bathroom" },
  { id: "dining", name: "Dining Room", emoji: "🍽️", seed: "mdg-dining" },
  { id: "office", name: "Office", emoji: "💼", seed: "mdg-office" },
  { id: "kids", name: "Kids Room", emoji: "🧸", seed: "mdg-kids" },
  { id: "balcony", name: "Balcony", emoji: "🪴", seed: "mdg-balcony" },
];

export const modernStyles = [
  "Modern",
  "Luxury",
  "Minimalist",
  "Japandi",
  "Scandinavian",
  "Bohemian",
];

export const regionalStyles = [
  "Rajasthan",
  "Kerala",
  "Kashmir",
  "Punjab",
  "Gujarat",
  "Tamil Nadu",
  "Karnataka",
  "Telangana",
  "Uttar Pradesh",
  "Maharashtra",
  "Goa",
  "West Bengal",
  "Assam",
  "Sikkim",
  "Bihar",
  "Odisha",
  "Himachal Pradesh",
  "Uttarakhand",
  "Delhi",
  "Andhra Pradesh",
  "Haryana",
  "Madhya Pradesh",
  "Chhattisgarh",
  "Jharkhand",
  "Manipur",
  "Meghalaya",
];

export const budgets = ["Under ₹50K", "₹50K–2L", "₹2L–5L", "₹5L+"];

export interface DesignItem {
  id: string;
  title: string;
  style: string;
  room: string;
  beforeSeed: string;
  afterSeed: string;
  purchased: boolean;
  date: string;
}

export const designs: DesignItem[] = [
  { id: "d1", title: "Sunlit Living Room", style: "Rajasthan", room: "Living Room", beforeSeed: "before-1", afterSeed: "after-1", purchased: true, date: "Today" },
  { id: "d2", title: "Calm Japandi Bedroom", style: "Japandi", room: "Bedroom", beforeSeed: "before-2", afterSeed: "after-2", purchased: false, date: "Today" },
  { id: "d3", title: "Coastal Goa Balcony", style: "Goa", room: "Balcony", beforeSeed: "before-3", afterSeed: "after-3", purchased: true, date: "Yesterday" },
  { id: "d4", title: "Modern Luxe Kitchen", style: "Luxury", room: "Kitchen", beforeSeed: "before-4", afterSeed: "after-4", purchased: false, date: "Yesterday" },
  { id: "d5", title: "Kerala Heritage Dining", style: "Kerala", room: "Dining Room", beforeSeed: "before-5", afterSeed: "after-5", purchased: false, date: "2 days ago" },
  { id: "d6", title: "Minimal Home Office", style: "Minimalist", room: "Office", beforeSeed: "before-6", afterSeed: "after-6", purchased: true, date: "3 days ago" },
  { id: "d7", title: "Boho Kids Room", style: "Bohemian", room: "Kids Room", beforeSeed: "before-7", afterSeed: "after-7", purchased: false, date: "Last week" },
  { id: "d8", title: "Kashmiri Warmth", style: "Kashmir", room: "Living Room", beforeSeed: "before-8", afterSeed: "after-8", purchased: false, date: "Last week" },
];

export interface Consultant {
  id: string;
  name: string;
  avatarSeed: string;
  rating: number;
  reviews: number;
  experience: number;
  specialty: string;
  state: string;
  price: number;
  bio: string;
  portfolio: string[];
}

export const consultants: Consultant[] = [
  {
    id: "c1",
    name: "Priya Sharma",
    avatarSeed: "priya",
    rating: 4.9,
    reviews: 214,
    experience: 8,
    specialty: "Luxury & Modern",
    state: "Maharashtra",
    price: 1499,
    bio: "Award-winning designer crafting warm, liveable luxury spaces across Mumbai and Pune.",
    portfolio: ["port-1", "port-2", "port-3", "port-4"],
  },
  {
    id: "c2",
    name: "Rohan Mehta",
    avatarSeed: "rohan",
    rating: 4.8,
    reviews: 167,
    experience: 6,
    specialty: "Rajasthani Heritage",
    state: "Rajasthan",
    price: 999,
    bio: "Blends traditional Jaipur craftsmanship with contemporary comfort.",
    portfolio: ["port-5", "port-6", "port-7", "port-8"],
  },
  {
    id: "c3",
    name: "Ananya Nair",
    avatarSeed: "ananya",
    rating: 5.0,
    reviews: 98,
    experience: 5,
    specialty: "Kerala & Coastal",
    state: "Kerala",
    price: 1199,
    bio: "Specialist in airy, tropical interiors using natural wood and stone.",
    portfolio: ["port-9", "port-10", "port-11", "port-12"],
  },
  {
    id: "c4",
    name: "Vikram Singh",
    avatarSeed: "vikram",
    rating: 4.7,
    reviews: 142,
    experience: 10,
    specialty: "Minimalist & Japandi",
    state: "Delhi",
    price: 1799,
    bio: "Decade of experience designing calm, clutter-free urban homes.",
    portfolio: ["port-13", "port-14", "port-15", "port-16"],
  },
];

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  { id: "r1", name: "Sneha K.", rating: 5, text: "Transformed our flat beautifully. Highly recommended!" },
  { id: "r2", name: "Amit P.", rating: 5, text: "Professional, punctual and very creative." },
  { id: "r3", name: "Divya R.", rating: 4, text: "Great experience overall, loved the mood boards." },
];

export const timeSlots = ["10:00 AM", "11:30 AM", "1:00 PM", "3:00 PM", "4:30 PM", "6:00 PM"];

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: "credit" | "debit";
  date: string;
}

export const transactions: Transaction[] = [
  { id: "t1", title: "Added Money", amount: 999, type: "credit", date: "Jun 5" },
  { id: "t2", title: "HD Design Download", amount: 299, type: "debit", date: "Jun 4" },
  { id: "t3", title: "Referral Reward", amount: 150, type: "credit", date: "Jun 2" },
  { id: "t4", title: "Consultation — Priya Sharma", amount: 1499, type: "debit", date: "May 30" },
  { id: "t5", title: "Added Money", amount: 499, type: "credit", date: "May 28" },
];

export const walletPackages = [
  { id: "p1", amount: 499, bonus: 0 },
  { id: "p2", amount: 999, bonus: 100 },
  { id: "p3", amount: 1999, bonus: 300 },
];

export interface AppNotification {
  id: string;
  type: "design" | "payment" | "reminder" | "referral";
  title: string;
  body: string;
  time: string;
  unread: boolean;
}

export const notifications: AppNotification[] = [
  { id: "n1", type: "design", title: "Your design is ready!", body: "3 new Rajasthan living room designs are waiting.", time: "2m ago", unread: true },
  { id: "n2", type: "payment", title: "Payment successful", body: "₹999 added to your wallet.", time: "1h ago", unread: true },
  { id: "n3", type: "reminder", title: "Consultation reminder", body: "Session with Priya Sharma tomorrow at 11:30 AM.", time: "3h ago", unread: false },
  { id: "n4", type: "referral", title: "Referral reward earned", body: "You earned ₹150 — your friend joined MyDesignGhar.", time: "1d ago", unread: false },
];

export interface Session {
  id: string;
  consultant: string;
  avatarSeed: string;
  date: string;
  time: string;
  status: "upcoming" | "past";
}

export const sessions: Session[] = [
  { id: "s1", consultant: "Priya Sharma", avatarSeed: "priya", date: "Jun 8, 2026", time: "11:30 AM", status: "upcoming" },
  { id: "s2", consultant: "Ananya Nair", avatarSeed: "ananya", date: "Jun 12, 2026", time: "3:00 PM", status: "upcoming" },
  { id: "s3", consultant: "Rohan Mehta", avatarSeed: "rohan", date: "May 24, 2026", time: "1:00 PM", status: "past" },
  { id: "s4", consultant: "Vikram Singh", avatarSeed: "vikram", date: "May 10, 2026", time: "4:30 PM", status: "past" },
];

export const homeStats = [
  { label: "Designs Generated", value: "48", icon: "sparkles" },
  { label: "Money Saved", value: "₹2.4L", icon: "wallet" },
  { label: "Consultants Booked", value: "3", icon: "users" },
];

export const quickActions = [
  { id: "designs", label: "My Designs", to: "/designs", icon: "gallery" },
  { id: "regional", label: "Regional Styles", to: "/generate", icon: "map" },
  { id: "consultants", label: "Consultants", to: "/consultants", icon: "users" },
  { id: "wallet", label: "Wallet", to: "/wallet", icon: "wallet" },
];

// ===== Designer-facing website (recruiting + dashboard) mock data =====

export interface DesignerProject {
  id: string;
  client: string;
  clientSeed: string;
  title: string;
  room: string;
  city: string;
  budget: string;
  status: "lead" | "in-progress" | "review" | "completed";
  progress: number;
  deadline: string;
  value: number;
}

export const designerProjects: DesignerProject[] = [
  { id: "pj1", client: "Aarav Gupta", clientSeed: "client-aarav", title: "3BHK Full Home Makeover", room: "Whole Home", city: "Mumbai", budget: "₹5L+", status: "in-progress", progress: 62, deadline: "Jun 28, 2026", value: 540000 },
  { id: "pj2", client: "Meera Iyer", clientSeed: "client-meera", title: "Modern Living Room", room: "Living Room", city: "Bengaluru", budget: "₹2L–5L", status: "review", progress: 88, deadline: "Jun 20, 2026", value: 230000 },
  { id: "pj3", client: "Kabir Khan", clientSeed: "client-kabir", title: "Master Bedroom Redesign", room: "Bedroom", city: "Delhi", budget: "₹50K–2L", status: "lead", progress: 8, deadline: "Jul 10, 2026", value: 120000 },
  { id: "pj4", client: "Saanvi Rao", clientSeed: "client-saanvi", title: "Kerala Heritage Kitchen", room: "Kitchen", city: "Kochi", budget: "₹2L–5L", status: "in-progress", progress: 41, deadline: "Jul 02, 2026", value: 310000 },
  { id: "pj5", client: "Dev Malhotra", clientSeed: "client-dev", title: "Compact Studio Apartment", room: "Studio", city: "Pune", budget: "₹50K–2L", status: "completed", progress: 100, deadline: "May 30, 2026", value: 95000 },
  { id: "pj6", client: "Ishita Bose", clientSeed: "client-ishita", title: "Boho Kids Room", room: "Kids Room", city: "Kolkata", budget: "Under ₹50K", status: "completed", progress: 100, deadline: "May 18, 2026", value: 48000 },
];

export interface DesignerClient {
  id: string;
  name: string;
  avatarSeed: string;
  city: string;
  projects: number;
  lastActive: string;
  lifetimeValue: number;
}

export const designerClients: DesignerClient[] = [
  { id: "cl1", name: "Aarav Gupta", avatarSeed: "client-aarav", city: "Mumbai", projects: 2, lastActive: "2h ago", lifetimeValue: 720000 },
  { id: "cl2", name: "Meera Iyer", avatarSeed: "client-meera", city: "Bengaluru", projects: 1, lastActive: "Today", lifetimeValue: 230000 },
  { id: "cl3", name: "Kabir Khan", avatarSeed: "client-kabir", city: "Delhi", projects: 1, lastActive: "Yesterday", lifetimeValue: 120000 },
  { id: "cl4", name: "Saanvi Rao", avatarSeed: "client-saanvi", city: "Kochi", projects: 3, lastActive: "3d ago", lifetimeValue: 640000 },
  { id: "cl5", name: "Dev Malhotra", avatarSeed: "client-dev", city: "Pune", projects: 1, lastActive: "1w ago", lifetimeValue: 95000 },
];

export const designerStats = [
  { label: "Active Projects", value: "4", icon: "projects", trend: "+2 this month" },
  { label: "Total Clients", value: "27", icon: "clients", trend: "+5 this month" },
  { label: "Revenue (FY)", value: "₹18.6L", icon: "revenue", trend: "+34%" },
  { label: "Avg. Rating", value: "4.9", icon: "rating", trend: "214 reviews" },
];

export const designerPipeline = [
  { stage: "Leads", count: 6, color: "var(--accent)" },
  { stage: "In Progress", count: 4, color: "var(--primary)" },
  { stage: "In Review", count: 2, color: "#6366F1" },
  { stage: "Completed", count: 15, color: "var(--success)" },
];

export const designerOnboardingSteps = [
  { key: "profile", title: "Build your profile", desc: "Add your name, city, specialities and a short bio clients will love." },
  { key: "portfolio", title: "Upload your portfolio", desc: "Showcase 6–12 of your best projects to win trust instantly." },
  { key: "expertise", title: "Set your expertise", desc: "Pick the regional & modern styles and room types you master." },
  { key: "pricing", title: "Set consultation pricing", desc: "Choose your per-session fee and availability." },
  { key: "verify", title: "Get verified", desc: "Submit ID & credentials to earn the verified designer badge." },
];

export const recruitBenefits = [
  { icon: "leads", title: "Qualified leads on tap", desc: "We match you with homeowners actively looking for designers in your city." },
  { icon: "earnings", title: "Earn on your terms", desc: "Set your own consultation fees and keep up to 85% of every project." },
  { icon: "ai", title: "AI does the busywork", desc: "Generate mood boards and concepts in seconds so you focus on design." },
  { icon: "growth", title: "Grow your brand", desc: "A verified profile, reviews and portfolio that gets you discovered." },
];

export const recruitSteps = [
  { n: "01", title: "Apply", desc: "Create your designer profile in minutes." },
  { n: "02", title: "Get verified", desc: "We review your credentials and portfolio." },
  { n: "03", title: "Start earning", desc: "Receive matched leads and manage projects in one place." },
];

export const designerTestimonials = [
  { name: "Priya Sharma", city: "Mumbai", seed: "priya", quote: "MyDesignGhar doubled my bookings in 3 months. The lead quality is unreal." },
  { name: "Rohan Mehta", city: "Jaipur", seed: "rohan", quote: "The AI mood boards save me hours per client. I just refine and present." },
  { name: "Ananya Nair", city: "Kochi", seed: "ananya", quote: "Finally a platform built for Indian designers and Indian homes." },
];
