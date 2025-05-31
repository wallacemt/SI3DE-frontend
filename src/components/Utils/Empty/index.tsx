import emptyImg from "@/assets/empty.svg";
interface EmptyProps {
  image?: string;
  message: string;
}
export const Empty = ({ image = emptyImg, message }: EmptyProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center  shadow-muted-foreground">
      <img src={image} alt="Empty Ilustration" className="h-40" />
      <p className="text-md text-muted-foreground">{message}</p>
    </div>
  );
};
