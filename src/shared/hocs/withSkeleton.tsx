import Skeleton from "../ui/Skeleton/Skeleton";

interface Props {
  isLoading: boolean;
}

function withSkeleton<P extends object>(Component: React.ComponentType<P>) {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton />;
    }
    return <Component {...(restProps as P)} />;
  };
}

export default withSkeleton;
