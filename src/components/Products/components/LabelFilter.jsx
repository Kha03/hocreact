import { Box, Chip } from "@mui/material";
import PropTypes from "prop-types";
import { useMemo } from "react";

LabelFilter.propTypes = {
  Filters: PropTypes.object,
};
const filterService = [
  {
    id: 1,
    getLable: () => "Miễn phí giao hàng",
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }
      return newFilters;
    },
  },
  {
    id: 2,
    getLable: () => "Khuyến mãi",
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 3,
    getLable: (filters) =>
      `Giá ${filters.salePrice_gte} - ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) =>
      filters.salePrice_gte >= 0 &&
      filters.salePrice_lte > filters.salePrice_gte,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;
      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 4,
    getLable: (filters) => `${filters["category.name"]}`,
    isActive: () => true,
    isVisible: (filters) => filters["category.id"],
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters["category.id"];
      delete newFilters["category.name"];
      return newFilters;
    },
    onToggle: () => {},
  },
];
function LabelFilter({ Filters = {}, onChange = {} }) {
  console.log(Filters);
  const memo = useMemo(() => {
    console.log(123);
    return filterService.filter((x) => x.isVisible(Filters));
  }, [Filters]);
  return (
    <Box
      component={"ul"}
      sx={{ listStyle: "none", display: "flex", padding: 0 }}
    >
      {memo.map((x) => (
        <Box component={"li"} key={x.id} ml={2}>
          <Chip
            variant="filled"
            label={x.getLable(Filters)}
            clickable={!x.isRemovable}
            onClick={(e) => {
              if (x.isRemovable) return;
              const newFilters = x.onToggle(Filters);
              if (!onChange) return;
              onChange(newFilters);
            }}
            onDelete={
              x.isRemovable
                ? () => {
                    const newFilters = x.onRemove(Filters);
                    if (!onChange) return;
                    onChange(newFilters);
                  }
                : null
            }
            color={x.isActive(Filters) ? "primary" : "default"}
          />
        </Box>
      ))}
    </Box>
  );
}

export default LabelFilter;
