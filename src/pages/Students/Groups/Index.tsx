import React, { useState, useMemo, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Offcanvas,
  Row,
} from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import TableContainer from "Common/TableContainer";
import { Link, useNavigate } from "react-router-dom";
import Selection from "./Selection";
import Swal from "sweetalert2";
import SimpleBar from "simplebar-react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store"; // Import your RootState interface
import { selectCurrentUser } from "../../../features/account/authSlice";
import {
  useFetchStudentsQuery,
  useRemoveStudentFromGroupMutation,
} from "features/student/studentSlice";
import {
  GroupInterface,
  useAddGroupMutation,
  useAddStudentToGroupMutation,
  useDeleteGroupMutation,
  useFetchGroupQuery,
} from "features/group/groupSlice";
import { useFetchProgrammsQuery } from "features/programms/programmSlice";

interface Student {
  [x: string]: any;
  _id?: string;
  firstName: string;
  lastName: string;
  dateBirth: string;
  login: string;
  password: string;
  email: string;
  phone: string;
  classStudent: string;
  houseStreerNumber: string;
  deparment: string;
  country: string;
  card_id: string;
  nameParent: string;
  status_account: string;
  id_creation_date: string;
  id_file: string;
  IdFileExtension: string;
  IdFileBase64String: string;
  DropOff_date: string;
  DropOff_time: string;
  DropOff_station: string;
  pickUp_date: string;
  pickUp_time: string;
  pickUp_station: string;
  group: string;
  photo_id: string;
  PhotoIdBase64String: string;
  PhotoIdExtension: string;
  idSchool?: string;
  groupId?: string | null;
  groupJoiningDate: string | null;
}
const Group = () => {
  document.title = "Group | School Administration";
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => selectCurrentUser(state));
  console.log("user", user);

  const [modal_AddShippingModals, setmodal_AddShippingModals] =
    useState<boolean>(false);
  const [filteredStudent, setFilteredStudent] = useState<Student[]>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [selectedProgram, setSelectedProgram] = useState<string>("");

  function tog_AddShippingModals() {
    setmodal_AddShippingModals(!modal_AddShippingModals);
  }
  const [modal_AddStudents, setmodal_AddStudents] = useState<boolean>(false);
  function tog_AddStudents() {
    setmodal_AddStudents(!modal_AddStudents);
  }
  const [showGroups, setShowGroups] = useState<boolean>(false);
  const [showGroupDetails, setShowGroupsDetails] = useState<any>({});
  const [selectedStudents, setSelectedStudents] = useState([]);
  const { data = [] } = useFetchGroupQuery();

  console.log("Api data", data);

  const { data: students = [] } = useFetchStudentsQuery();
  const { data: AllPrograms = [] } = useFetchProgrammsQuery();

  const [deleteGroup] = useDeleteGroupMutation();
  const [deleteStudent] = useRemoveStudentFromGroupMutation();
  const [createGroup] = useAddGroupMutation();
  const [AddStudentToGroup] = useAddStudentToGroupMutation();

  console.log(data, "students");

  const filtered = students.filter(
    (students: any) => students.groupId === null
  );
  console.log("filter1", filtered);

  useEffect(() => {
    const filtered = students.filter(
      (students: any) => students.groupId === null
    );
    setFilteredStudent(filtered);
  }, [students]);
  const handleSelectionChange = (selected: any) => {
    setSelectedStudents(selected);
  };
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = event.currentTarget.selectedOptions;

    const newColors = [];
    for (let i = 0; i < selectedOptions.length; i++) {
      newColors.push(selectedOptions[i].value);
    }

    setSelectedValues(newColors);
  };
  console.log("filter", selectedValues);
  const selectChangeProgram = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedProgram(value);
  };

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.id]: e.target.value,
  //   }));
  // };
  // const onSubmitGroup = (e: React.FormEvent<HTMLFormElement>) => {
  //   formData["program"] = selectedProgram;
  //   e.preventDefault();
  //   formData["students"] = selectedStudents;
  //   createGroup(formData).then(() => setFormData(formData));
  //   notify();
  //   tog_AddShippingModals();
  // };

  const onSubmitEmployeesToGroup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updatedformData["_id"] = showGroupDetails._id;
    updatedformData["students"] = selectedValues;
    AddStudentToGroup(updatedformData)
      .then(() => {
        notify();
      })
      .then(() => tog_AddStudents())
      .then(() => setShowGroups(!showGroups))
      .then(() => navigate("/groups"))
      .catch((error: any) => {
        console.error(error);
      });
    window.location.reload();
  };

  // const [formData, setFormData] = useState({
  //   _id: "",
  //   groupName: "",
  //   note: "",
  //   startPoint: "",
  //   dateStart: "",
  //   timeStart: "",
  //   Destination: "",
  //   dateEnd: "",
  //   timeEnd: "",
  //   status: "",
  //   program: "",
  //   id_school: user?._id!,
  //   students: [
  //     {
  //       _id: "",
  //       firstName: "",
  //       lastName: "",
  //       id_file: "",
  //       groupId: "",
  //       groupJoiningDate: "",
  //     },
  //   ],
  // });
  const [updatedformData, setupdatedFormData] = useState({
    _id: "",
    students: [""],
  });

  const notify = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Group has been created successfully",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const AlertDelete = async (_id: any) => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You can not step back!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel!",
        reverseButtons: true,
      })
      .then((result: any) => {
        if (result.isConfirmed) {
          deleteGroup(_id);
          swalWithBootstrapButtons.fire(
            "Deleted !",
            "Group has been deleted.",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire("Cancel", "Group secured :)", "error");
        }
      });
  };
  const DeleteStudent = async (studentId: string, groupId: string) => {
    const confirmation = await Swal.fire({
      title: "Are you sure you want to remove the student?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Remove Student",
      cancelButtonText: "Cancel",
    });

    if (confirmation.isConfirmed) {
      try {
        await deleteStudent({ studentId, groupId });
        setShowGroups(!showGroups);
        Swal.fire("Success!", "Student removed successfully.", "success");
        window.location.reload();
      } catch (error) {
        console.error("Error removing student:", error);
        Swal.fire(
          "Error!",
          "An error occurred while removing the student.",
          "error"
        );
      }
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "Group Name",
        accessor: "groupName",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Program Name",
        accessor: "program.programName",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Students",
        accessor: "students",
        disableFilters: true,
        filterable: true,
        Cell: ({ row }: { row: any }) => (
          <span>{row?.original?.students?.length!}</span>
        ),
      },
      {
        Header: "Status",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: GroupInterface) => {
          switch (cellProps.status) {
            case "Active":
              return (
                <span className="badge bg-success-subtle text-success">
                  {" "}
                  {cellProps.status}
                </span>
              );
            case "Inactive":
              return (
                <span className="badge bg-danger-subtle text-danger">
                  {" "}
                  {cellProps.status}
                </span>
              );
          }
        },
      },
      {
        Header: "Action",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: GroupInterface) => {
          return (
            <ul className="hstack gap-2 list-unstyled mb-0">
              <li>
                <Link
                  to="#"
                  state={cellProps}
                  className="badge bg-info-subtle text-info view-item-btn"
                  data-bs-toggle="offcanvas"
                  onClick={() => {
                    setShowGroupsDetails(cellProps);
                    setShowGroups(!showGroups);
                  }}
                >
                  <i
                    className="ph ph-eye"
                    style={{
                      transition: "transform 0.3s ease-in-out",
                      cursor: "pointer",
                      fontSize: "1.5em",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.4)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  ></i>
                </Link>
              </li>
              <li>
                <Link
                  to="#GroupDetails"
                  className="badge bg-success-subtle text-success edit-item-btn"
                >
                  <i
                    className="ph ph-pencil-line"
                    style={{
                      transition: "transform 0.3s ease-in-out",
                      cursor: "pointer",
                      fontSize: "1.5em",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.4)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  ></i>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="badge bg-danger-subtle text-danger remove-item-btn"
                  onClick={() => AlertDelete(cellProps._id)}
                >
                  <i
                    className="ph ph-trash"
                    style={{
                      transition: "transform 0.3s ease-in-out",
                      cursor: "pointer",
                      fontSize: "1.5em",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.4)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  ></i>
                </Link>
              </li>
            </ul>
          );
        },
      },
    ],
    [showGroups]
  );
  const hasStudents = filtered.length > 0;

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb title="Group" pageTitle="Employee" />
          <Card id="shipmentsList">
            <Card.Header className="border-bottom-dashed">
              <Row className="g-3">
                <Col xxl={3} lg={6}>
                  <div className="search-box">
                    <input
                      type="text"
                      className="form-control search"
                      placeholder="Search for groups..."
                    />
                    <i className="ri-search-line search-icon"></i>
                  </div>
                </Col>
                {/* <Col className="col-xxl-auto col-sm-auto ms-auto">
                  <Button
                    variant="success"
                    onClick={() => tog_AddShippingModals()}
                    className="add-btn"
                  >
                    <i className="bi bi-plus-circle me-1 align-middle"></i> Add
                    New Group
                  </Button>
                </Col> */}
              </Row>
            </Card.Header>
            <Card.Body className="p-0">
              {/* <div className="table-responsive table-card"> */}
              <TableContainer
                columns={columns || []}
                data={data || []}
                // isGlobalFilter={false}
                iscustomPageSize={false}
                isBordered={false}
                customPageSize={10}
                className="custom-header-css table align-middle table-nowrap"
                tableClass="table-centered align-middle table-nowrap mb-0"
                theadClass="text-muted table-light"
                SearchPlaceholder="Search Products..."
              />
              {/* </div> */}
              <div className="noresult" style={{ display: "none" }}>
                <div className="text-center py-4">
                  <div className="avatar-md mx-auto mb-4">
                    <div className="avatar-title bg-primary-subtle text-primary rounded-circle fs-24">
                      <i className="bi bi-search"></i>
                    </div>
                  </div>
                  <h5 className="mt-2">Sorry! No Result Found</h5>
                  <p className="text-muted mb-0">
                    We've searched for groups and we did not find any groups for
                    you search.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>

          {/* Modal add Group */}
          {/* <Modal
            className="fade zoomIn"
            size="lg"
            show={modal_AddShippingModals}
            onHide={() => {
              tog_AddShippingModals();
            }}
            centered
          >
            <Modal.Header className="px-4 pt-4" closeButton>
              <h5 className="modal-title fs-18" id="exampleModalLabel">
                Create New Group
              </h5>
            </Modal.Header>
            <Modal.Body className="p-4">
              <div
                id="alert-error-msg"
                className="d-none alert alert-danger py-2"
              ></div>
              <Form className="tablelist-form" onSubmit={onSubmitGroup}>
                <input type="hidden" id="id-field" />
                <Row>
                  <Col lg={12}>
                    <div className="mb-3">
                      <Form.Label htmlFor="groupName"> Group Name</Form.Label>
                      <Form.Control
                        type="text"
                        id="groupName"
                        placeholder="Enter Group name"
                        required
                        value={formData.groupName}
                        onChange={onChange}
                      />
                    </div>
                  </Col>

                  <div className="col-lg-10">
                    <div className="mb-3">
                      <Form.Label htmlFor="note"> Description</Form.Label>
                      <Form.Control
                        type="text"
                        id="note"
                        placeholder="Enter description"
                        required
                        value={formData.note}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <Col lg={6}>
                    <div className="mb-3">
                      <label htmlFor="group" className="form-label">
                        Program
                      </label>
                      <select
                        className="form-select text-muted"
                        name="choices-single-default"
                        id="group"
                        onChange={selectChangeProgram}
                      >
                        <option value="">Select Program</option>
                        {AllPrograms.map((program) => (
                          <option value={program?._id!} key={program?._id!}>
                            {program?.programName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div>
                      <Selection onSelectionChange={handleSelectionChange} />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="hstack gap-2 justify-content-end">
                      <Button
                        className="btn-ghost-danger"
                        onClick={() => {
                          tog_AddShippingModals();
                        }}
                        data-bs-dismiss="modal"
                      >
                        <i className="ri-close-line align-bottom me-1"></i>{" "}
                        Close
                      </Button>
                      <Button variant="primary" id="add-btn" type="submit">
                        Add Group
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
          </Modal> */}
          {/* modal add new employees to the group */}
        </Container>
      </div>

      {/* show group details */}
      <Offcanvas
        show={showGroups}
        onHide={() => setShowGroups(!showGroups)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Group Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mt-3">
            <div className="table-responsive">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>
                      <span className="text-muted">Group Name:</span>
                    </td>
                    <td>
                      <span className="fw-medium">
                        {showGroupDetails.groupName}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="text-muted">Program:</span>
                    </td>
                    <td>
                      <span className="fw-medium text-uppercase">
                        {showGroupDetails.program?.programName!}
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="text-muted ">Students List:</span>
                    </td>
                    <td>
                      <Button
                        type="button"
                        className="btn  btn-sm btn-soft-primary "
                        onClick={() => tog_AddStudents()}
                      >
                        Add Student
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="card card-height-100">
                <SimpleBar>
                  {showGroupDetails.students &&
                  showGroupDetails.students.length === 0 ? (
                    <div className="p-3">
                      <p>No students to display</p>
                    </div>
                  ) : (
                    showGroupDetails.students?.map(
                      (student: {
                        id_file: string;
                        _id: string;
                        firstName: string;
                        lastName: string;
                      }) => (
                        <div
                          className="p-3 border-bottom border-bottom-dashed"
                          key={student._id}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <div className="flex-shrink-0">
                              <img
                                src={`${process.env.REACT_APP_FILE_URL}/studentFiles/img/${student.id_file}`}
                                alt=""
                                className="rounded dash-avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="mb-1">
                                {student.firstName} {student.lastName}
                              </h6>
                            </div>
                            <div className="flex-shrink-0">
                              <Button
                                onClick={() =>
                                  DeleteStudent(
                                    student._id,
                                    showGroupDetails._id
                                  )
                                }
                                className="btn btn-icon btn-sm btn-soft-danger"
                              >
                                {/* remove employee from group */}
                                <i className="ph ph-trash"></i>
                              </Button>
                            </div>
                          </div>
                        </div>
                      )
                    )
                  )}
                </SimpleBar>
              </div>
            </div>
          </div>
        </Offcanvas.Body>

        <Modal
          className="fade zoomIn"
          size="lg"
          show={modal_AddStudents}
          onHide={() => {
            tog_AddStudents();
          }}
          centered
        >
          <Modal.Header className="px-4 pt-4" closeButton>
            <h5 className="modal-title fs-18" id="exampleModalLabel">
              Add new Students To The Group
            </h5>
          </Modal.Header>
          <Modal.Body className="p-4">
            <div
              id="alert-error-msg"
              className="d-none alert alert-danger py-2"
            ></div>
            <Form
              className="tablelist-form"
              onSubmit={onSubmitEmployeesToGroup}
            >
              <input type="hidden" id="id-field" />
              <input
                type="hidden"
                name="_id"
                id="_id"
                value={showGroupDetails._id}
              />
              <Row>
                <Col lg={12} md={6}>
                  <div className="mb-3">
                    {hasStudents ? (
                      <select
                        multiple
                        size={8}
                        onChange={handleSelectChange}
                        className="select"
                        style={{ width: "300px" }}
                      >
                        {filtered.map((employees: any) => (
                          <option
                            key={employees._id}
                            value={`${employees._id}`}
                          >
                            {employees.firstName} {employees.lastName}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <p>No students to add.</p>
                    )}
                  </div>
                </Col>

                <Col lg={12}>
                  <div className="hstack gap-2 justify-content-end">
                    <Button
                      className="btn-ghost-danger"
                      onClick={() => {
                        tog_AddStudents();
                      }}
                      data-bs-dismiss="modal"
                    >
                      <i className="ri-close-line align-bottom me-1"></i> Close
                    </Button>
                    <Button variant="primary" id="add-btn" type="submit">
                      Add
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
        </Modal>
      </Offcanvas>
    </React.Fragment>
  );
};

export default Group;
