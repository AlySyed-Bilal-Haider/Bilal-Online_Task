import { Box, Button, Container } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    borderBottom: "none",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderBottom: "none",
  },
}));
function DashboardTable() {
  let array = [
    {
      number: "1",
      accountName: "B64..plx",
      auther: "Bilal",
      like: "254",
    },
    {
      number: "2",
      accountName: "BeeMore",
      auther: "hassan",
      like: "203",
    },
    {
      number: "3",
      accountName: "Busan",
      auther: "ali",
      like: "134",
    },
    {
      number: "4",
      accountName: "Love-SOL",
      auther: "azam",
      like: "99",
    },
    {
      number: "5",
      accountName: "Love-SOL",
      auther: "waqas",

      like: "88",
    },
  ];
  const [users, setUsers] = useState(array);

  const handleDragEnd = (e) => {
    if (!e.destination) return;
    let tempData = Array.from(users);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setUsers(tempData);
  };
  return (
    <Box py={10} sx={{ backgroundColor: "black" }}>
      <Container maxWidth="md">
        <Box
          p={{ xs: 2.5, md: 4 }}
          sx={{
            backgroundColor: "#151515",
            borderRadius: "40px",
            boxShadow: "2px 2px 10px lightgray",
          }}
        >
          <DragDropContext onDragEnd={handleDragEnd}>
            <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
              <Table sx={{ backgroundColor: "#151515" }}>
                <TableHead
                  sx={{
                    backgroundColor: "#1a1a1a",
                  }}
                >
                  <TableRow>
                    <StyledTableCell
                      align="center"
                      sx={{ color: "#fff", fontSize: "16px" }}
                    >
                      #
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{ color: "#fff", fontSize: "16px" }}
                    >
                      Title
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{ color: "#fff", fontSize: "16px" }}
                    >
                      Auther
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{ color: "#fff", fontSize: "16px" }}
                    >
                      Most liked
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <Droppable droppableId="droppable-1">
                  {(provider) => (
                    <TableBody
                      ref={provider.innerRef}
                      {...provider.droppableProps}
                    >
                      {users?.map(
                        ({ number, accountName, auther, like }, index) => (
                          <Draggable
                            key={index}
                            draggableId={accountName}
                            index={index}
                          >
                            {(provider) => (
                              <TableRow
                                {...provider.draggableProps}
                                ref={provider.innerRef}
                              >
                                <StyledTableCell
                                  align="center"
                                  sx={{
                                    color: "#fff",
                                  }}
                                  {...provider.dragHandleProps}
                                >
                                  {number}
                                </StyledTableCell>

                                <StyledTableCell
                                  align="center"
                                  sx={{ color: "#fff" }}
                                >
                                  {accountName}
                                </StyledTableCell>
                                <StyledTableCell
                                  align="center"
                                  sx={{ color: "#fff" }}
                                >
                                  {auther}
                                </StyledTableCell>
                                <StyledTableCell
                                  align="center"
                                  sx={{ color: "#fff" }}
                                >
                                  {like}
                                </StyledTableCell>
                              </TableRow>
                            )}
                          </Draggable>
                        )
                      )}
                      {provider.placeholder}
                    </TableBody>
                  )}
                </Droppable>
              </Table>
            </TableContainer>
          </DragDropContext>
        </Box>
      </Container>
    </Box>
  );
}

export default DashboardTable;
