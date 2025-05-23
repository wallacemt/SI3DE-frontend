interface LoadingProps {
  spiner: any;
  message?: string;
}
export const Loading = ({ spiner, message }: LoadingProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-2">
      {spiner}
      <p>{message}</p>
    </div>
  );
};
