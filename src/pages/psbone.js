import psbone from "@/modules/psbone";

export const getServerSideProps = async () => {
  return {
    props: {
      auth: true,
    },
  };
};

export default psbone;