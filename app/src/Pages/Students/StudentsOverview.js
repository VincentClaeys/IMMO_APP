import Loading from "../../components/Global/Loading/Loading";
import List from "../../components/Global/List/List";
import ListItem from "../../components/Global/List/ListItem";
import Button from "../../components/Global/Button/Button";
import { formatName } from "../../modules/students/utils";
import DeleteStudentButton from "./Delete/DeleteStudentButton";
import useFetch from "../../hooks/useFetch";

const StudentsOverview = () => {
  const {
    isLoading,
    error,
    invalidate,
    data: students,
  } = useFetch("/students");
 
  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  const handleDeleteSuccess = () => {
    invalidate();
  };

  return (
    <>
      <div className="flex flex-end">
        <Button color="primary" href="add">
          Add
        </Button>
      </div>
      <List>
        {students.map((student) => (
          <ListItem
            href={`/students/${student._id}`}
            key={student._id}
            img={student.image}
            name={formatName(student)}
          >
            <DeleteStudentButton
              id={student._id}
              onSuccess={handleDeleteSuccess}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default StudentsOverview;
