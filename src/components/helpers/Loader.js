import { RotatingLines } from "react-loader-spinner";

export const Loader = () => {
  return (
    <RotatingLines
      visible={true}
      height="150"
      width="150"
      color="#3470FF"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
      //   position="absolute"
      //   top="-50%"
      //   left="50%"
      //   transform="translate(-50%, -50%)"
    />
  );
};
