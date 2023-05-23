import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";

type Props = {
    currentPage:number;
     totalPages:number
      onPageChange:(page :number) =>void
}

export function Pagination  ({ currentPage, totalPages, onPageChange }:Props)  {
    const handlePrevious = () => {
      
      if (currentPage >= 1) {

        onPageChange(currentPage - 1);
      }
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };
  
    return (
      <Box>
        <ButtonGroup>
          <Button
            leftIcon={<ChevronLeftIcon />}
            onClick={handlePrevious}
            disabled={currentPage === 0}
          >
            Previous
          </Button>
          <Button
            rightIcon={<ChevronRightIcon />}
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </ButtonGroup>
      </Box>
    );
  };