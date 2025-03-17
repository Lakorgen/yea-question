export interface ISpecialization {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  questions: Record<string, unknown>;
}
