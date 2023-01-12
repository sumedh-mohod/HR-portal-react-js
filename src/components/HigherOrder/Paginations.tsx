import { Pagination, Box, PaginationItem } from "@mui/material";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { styles } from "../../styles/components/paginations";

const Paginations = (props: any) => {
  const { handlePageChange } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        margin: "15px",
        marginTop: "50px",
      }}
    >
      <Pagination
        count={2}
        showFirstButton
        showLastButton
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: KeyboardArrowLeftIcon,
              next: KeyboardArrowRightIcon,
              first: KeyboardDoubleArrowLeftIcon,
              last: KeyboardDoubleArrowRightIcon,
            }}
            {...item}
          />
        )}
        {...styles.pageSelected}
      />
    </Box>
  );
};

export default Paginations;
