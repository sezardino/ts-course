interface JobOffer {
  id: number;
  name: string;
  salary: number;
}

interface Featured {
  featured: boolean;
}

interface FeaturedJobOffer extends JobOffer, Featured {}

const backendOffer: FeaturedJobOffer = {
  id: 1,
  featured: true,
  name: "Backend developer",
  salary: 1000,
};
