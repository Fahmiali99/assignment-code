import Implement from "@/modules/implement";

export const getServerSideProps = async () => {
  return {
    props: {
      auth: true,
    },
  };
};

export default Implement;
