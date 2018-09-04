export class Zone {
  id: number;
  name: string;
  totalRoutes: number;
  totalBetas: number;
  image: string;
}

export class Route {
  id: number;
  name: string;
  totalBetas: number;
  routeSetter: string;
  color: string;
  date: string;
  grade: string;
  image: string[];
}


export class Beta {
  id: number;
  zone: number;
  route: number;
  videoPath: string;
  videoUrl: string;
  performer: string;
  date: string;
  tips: string;
  contacts: string;
}