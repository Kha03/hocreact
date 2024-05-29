import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

CheckedFilter.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function CheckedFilter({ filters = {}, onChange }) {
  const services = [
    { key: "Khuyến mãi", value: "isPromotion" },
    { key: "Miễn phí giao hàng", value: "isFreeShip" },
  ];
  const hanldeClick = (e) => {
    if (!onChange) return;
    const { value, checked } = e.target;
    onChange({ [value]: checked });
  };
  return (
    <Box pt={3}>
      <Typography variant="subtitle2">Ưu đãi</Typography>

      <FormGroup>
        {services.map((item) => (
          <FormControlLabel
            key={item.value}
            control={<Checkbox />}
            checked={Boolean(filters[item.value])}
            label={item.key}
            name={item.value}
            value={item.value}
            onChange={hanldeClick}
          />
        ))}
      </FormGroup>
    </Box>
  );
}

export default CheckedFilter;
