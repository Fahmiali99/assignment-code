import psbtwo from "@/modules/psbtwo";

export const getServerSideProps = async () => {
  return {
    props: {
      auth: true,
    },
  };
};

export default psbtwo;