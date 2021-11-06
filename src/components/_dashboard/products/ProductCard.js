import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
// material
import { Box, Card, Link, Typography, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
// utils
import { fCurrency } from "../../../utils/formatNumber";
//
import Label from "../../Label";
import ColorPreview from "../../ColorPreview";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
// ----------------------------------------------------------------------

const ProductImgStyle = styled("img")({
  top: 0,
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  // const {title,description,resource,priority,type} = {}
  const { name, cover, link, status } = product;

  return (
    <Card>
      <Box sx={{ pt: "50%", position: "relative" }}>
        {status && (
          <Label
            variant="filled"
            color={(status === "sale" && "error") || "info"}
            sx={{
              zIndex: 9,
              top: 50,
              right: 50,
              position: "absolute",
              textTransform: "uppercase",
            }}
          >
            {status}
          </Label>
        )}
        <ProductImgStyle alt={name} src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link
          to={link}
          color="inherit"
          underline="hover"
          component={RouterLink}
        >
          <p>{name}</p>
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            variant="contained"
            href={link}
            target="_blank"
            startIcon={<PlayCircleIcon />}
          >
            View
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
