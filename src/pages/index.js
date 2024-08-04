import Todo from "@/modules/todo";

export const getServerSideProps = async () => {
  return {
    props: {
      auth: true,
    },
  };
};

export default Todo;
