import { useState } from "react";
// material
import { Container, Stack, Typography } from "@mui/material";
// components
import Page from "../../components/Page";
import {
  ProductSort,
  ProductList,
  ProductCartWidget,
  ProductFilterSidebar,
} from "../../components/_dashboard/products";
//
import PRODUCTS from "../../_mocks_/products";

// ----------------------------------------------------------------------
// const { name, cover, price, colors, status, priceSale } = product;

const ped = [
  {
    name: "US Healthcare System Explained",
    cover: "https://img.youtube.com/vi/DublqkOSBBA/mqdefault.jpg",
    status: "sale",
    price: "",
    link: "https://youtu.be/DublqkOSBBA",
    source: "youtube",
    type: "video",
  },
  {
    name: "CitiusTech: Accelerating Innovation in Healthcare",
    cover: "https://img.youtube.com/vi/3SeKO3DTN5M/mqdefault.jpg",
    status: "",
    price: "",
    link: "https://youtu.be/3SeKO3DTN5M",
    source: "youtube",
    type: "video",
  },
  {
    name: "Joint Replacement Patient Education",
    cover: "https://img.youtube.com/vi/510gRsPGK-s/mqdefault.jpg",
    status: "",
    price: "",
    link: "https://youtu.be/510gRsPGK-s",
    source: "youtube",
    type: "video",
  },
  {
    name: "Quarantine workout : How to exercise",
    cover: "https://img.youtube.com/vi/1piFN_ioMVI/mqdefault.jpg",
    status: "",
    price: "",
    link: "https://youtu.be/1piFN_ioMVI",
    source: "youtube",
    type: "video",
  },
  {
    name: "10 Tips for Staying Safe in the Era of COVID-19",
    cover: "https://img.youtube.com/vi/xVu_I6WCsto/mqdefault.jpg",
    status: "",
    price: "",
    link: "https://youtu.be/xVu_I6WCsto",
    source: "youtube",
    type: "video",
  },
];

export default function PEducation() {
  return (
    <Page title="Dashboard: Products | Minimal-UI">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>

        <ProductList products={ped} />
      </Container>
    </Page>
  );
}
