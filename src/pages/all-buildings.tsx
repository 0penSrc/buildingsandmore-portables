import { useState } from 'react';
import Head from "next/head";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import Image from 'next/image';
import GAnalytics from '~/components/ganalytics';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AllBuildings = () => {

  const cards = [
      { id: 1, title: '10x10 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=10x10', price: '$4022.15' },
      { id: 2, title: '10x12 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=10x12', price: '$4552.60' },
      { id: 3, title: '10x14 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=10x14', price: '$5057.30' },
      { id: 4, title: '10x16 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=10x16', price: '$5392.05' },
      { id: 5, title: '10x20 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=10x20', price: '$6077.00' },
      { id: 6, title: '10x24 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=10x24', price: '$7318.15' },
      { id: 7, title: '12x12 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=12x12', price: '$5417.80' },
      { id: 8, title: '12x14 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=12x14', price: '$6066.70' },
      { id: 9, title: '12x16 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=12x16', price: '$6406.60' },
      { id: 10, title: '12x20 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=12x20', price: '$7967.05' },
      { id: 11, title: '12x24 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=12x24', price: '$9084.60' },
      { id: 12, title: '12x30 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=12x30', price: '$11180.65' },
      { id: 13, title: '12x32 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=12x32', price: '$11927.40' },
      { id: 14, title: '12x36 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=12x36', price: '$13415.75' },
      { id: 15, title: '12x40 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=12x40', price: '$14904.10' },
      { id: 16, title: '12x44 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=12x44', price: '$16397.60' },
      { id: 17, title: '14x24 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=14x24', price: '$10603.85' },
      { id: 18, title: '14x30 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=14x30', price: '$13050.10' },
      { id: 19, title: '14x32 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=14x32', price: '$13915.30' },
      { id: 20, title: '14x36 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=14x36', price: '$15656.00' },
      { id: 21, title: '14x40 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=14x40', price: '$17391.55' },
      { id: 22, title: '14x44 GAMBREL LOFTED BARN', category: 'GAMBREL LOFTED BARN', image: '/portable-4.png', link: '/gambrel-lofted-barn?selectedOption=14x44', price: '$19137.40' },
      { id: 23, title: '10x10 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=10x10', price: '$4681.35' },
      { id: 24, title: '10x12 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=10x12', price: '$5278.75' },
      { id: 25, title: '10x14 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=10x14', price: '$5984.30' },
      { id: 26, title: '10x16 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=10x16', price: '$6252.10' },
      { id: 27, title: '10x20 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=10x20', price: '$7065.80' },
      { id: 28, title: '10x24 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=10x24', price: '$8440.85' },
      { id: 29, title: '12x12 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=12x12', price: '$6210.90' },
      { id: 30, title: '12x14 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=12x14', price: '$6926.75' },
      { id: 31, title: '12x16 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=12x16', price: '$7333.60' },
      { id: 32, title: '12x20 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=12x20', price: '$9022.80' },
      { id: 33, title: '12x24 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=12x24', price: '$10274.25' },
      { id: 34, title: '12x30 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=12x30', price: '$12566.00' },
      { id: 35, title: '12x32 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=12x32', price: '$13379.70' },
      { id: 36, title: '12x36 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=12x36', price: '$15001.95' },
      { id: 37, title: '12x40 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=12x40', price: '$16619.05' },
      { id: 38, title: '12x44 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=12x44', price: '$18246.45' },
      { id: 39, title: '14x24 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=14x24', price: '$11860.45' },
      { id: 40, title: '14x30 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=14x30', price: '$14502.40' },
      { id: 41, title: '14x32 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=14x32', price: '$15434.55' },
      { id: 42, title: '14x36 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=14x36', price: '$17304.00' },
      { id: 43, title: '14x40 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=14x40', price: '$19173.45' },
      { id: 44, title: '14x44 GAMBREL LOFTED BARN SMARTSIDING', category: 'GAMBREL LOFTED BARN', image: '/portable-31.png', link: '/gambrel-lofted-barn-smart-siding?selectedOption=14x44', price: '$21,053.20' },


      { id: 45, title: '8x8 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=8x8', price: '$2,369.00' },
      { id: 46, title: '8x10 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=8x10', price: '$2,533.80' },
      { id: 47, title: '8x12 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=8x12', price: '$2,914.90' },
      { id: 48, title: '8x14 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=8x14', price: '$3,352.65' },
      { id: 49, title: '8x16 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=8x16', price: '$3,759.50' },
      { id: 50, title: '8x20 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=8x20', price: '$4,671.05' },
      { id: 51, title: '10x10 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=10x10', price: '$3,126.05' },
      { id: 52, title: '10x12 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=10x12', price: '$3,455.65' },
      { id: 53, title: '10x14 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=10x14', price: '$3,924.30' },
      { id: 54, title: '10x16 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=10x16', price: '$4,387.80' },
      { id: 55, title: '10x20 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=10x20', price: '$5,283.90' },
      { id: 56, title: '10x24 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=10x24', price: '$6,293.30' },
      { id: 57, title: '10x30 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=10x30', price: '$7,884.65' },
      { id: 58, title: '12x12 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=12x12', price: '$4,089.10' },
      { id: 59, title: '12x14 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=12x14', price: '$4,568.05' },
      { id: 60, title: '12x16 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=12x16', price: '$5,129.40' },
      { id: 61, title: '12x20 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=12x20', price: '$6,262.40' },
      { id: 62, title: '12x24 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=12x24', price: '$7,379.95' },
      { id: 63, title: '12x30 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=12x30', price: '$9,197.90' },
      { id: 64, title: '12X32 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=12x32', price: '$9,805.60' },
      { id: 65, title: '12x36 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=12x36', price: '$10,979.80' },
      { id: 66, title: '12x40 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=12x40', price: '$12,097.35' },
      { id: 67, title: '12x44 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=12x44', price: '$13,297.30' },
      { id: 68, title: '12x50 SINGLE SLOPE', category: 'SINGLE SLOPES', image: '/portable-3.png', link: '/single-slopes?selectedOption=12x50', price: '$15,074.05' },






      { id: 69, title: '8x8 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=8x8', price: '$2,899.45' },
      { id: 70, title: '8x10 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=8x10', price: '$3,131.20' },
      { id: 71, title: '8x12 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=8x12', price: '$3,574.10' },
      { id: 72, title: '8x14 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=8x14', price: '$4,078.80' },
      { id: 73, title: '8x16 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=8x16', price: '$4,552.60' },
      { id: 74, title: '8x20 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=8x20', price: '$5,598.05' },
      { id: 75, title: '10x10 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=10x10', price: '$3,785.25' },
      { id: 76, title: '10x12 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=10x12', price: '$4,181.80' },
      { id: 77, title: '10x14 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=10x14', price: '$4,851.30' },
      { id: 78, title: '10x16 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=10x16', price: '$5,247.85' },
      { id: 79, title: '10x20 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=10x20', price: '$6,272.70' },
      { id: 80, title: '10x24 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=10x24', price: '$7,416.00' },
      { id: 81, title: '10x30 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=10x30', price: '$9,203.05' },
      { id: 82, title: '12x12 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=12x12', price: '$4,882.20' },
      { id: 83, title: '12x14 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=12x14', price: '$5,428.10' },
      { id: 84, title: '12x16 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=12x16', price: '$6,056.40' },
      { id: 85, title: '12x20 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=12x20', price: '$7,318.15' },
      { id: 86, title: '12x24 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=12x24', price: '$8,569.60' },
      { id: 87, title: '12x30 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=12x30', price: '$10,583.25' },
      { id: 88, title: '12X32 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=12x32', price: '$11,257.90' },
      { id: 89, title: '12x36 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=12x36', price: '$12,566.00' },
      { id: 90, title: '12x40 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=12x40', price: '$13,812.30' },
      { id: 91, title: '12x44 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=12x44', price: '$15,156.45' },
      { id: 92, title: '12x50 SINGLE SLOPES SMARTSIDING', category: 'SINGLE SLOPES', image: '/portable-32.png', link: '/single-slope-smartsiding?selectedOption=12x50', price: '$17,118.60' },





      { id: 115, title: '10x10 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=10x10', price: '3,774.95' },
      { id: 116, title: '10x12 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=10x12', price: '4,114.85' },
      { id: 117, title: '10x14 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=10x14', price: '4,521.70' },
      { id: 118, title: '10x16 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=10x16', price: '4,954.30' },
      { id: 119, title: '10x20 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=10x20', price: '5,793.75' },
      { id: 120, title: '10x24 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=10x24', price: '6,741.35' },
      { id: 121, title: '12x12 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=12x12', price: '4,712.25' },
      { id: 122, title: '12x14 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=12x14', price: '5,165.45' },
      { id: 123, title: '12x16 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=12x16', price: '5,690.75' },
      { id: 124, title: '12x20 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=12x20', price: '6,756.80' },
      { id: 125, title: '12x24 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=12x24', price: '7,802.25' },
      { id: 126, title: '12x30 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=12x30', price: '9,506.90' },
      { id: 127, title: '12x32 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=12x32', price: '10,073.40' },
      { id: 128, title: '12x36 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=12x36', price: '11,165.20' },
      { id: 129, title: '12x40 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=12x40', price: '12,210.65' },
      { id: 130, title: '12x44 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=12x44', price: '13,333.35' },
      { id: 131, title: '14x24 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=14x24', price: '9,007.35' },
      { id: 132, title: '14x30 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=14x30', price: '10,928.30' },
      { id: 133, title: '14x32 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=14x32', price: '11,577.20' },
      { id: 134, title: '14x36 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=14x36', price: '12,833.80' },
      { id: 135, title: '14x40 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=14x40', price: '14,059.50' },
      { id: 136, title: '14x44 END GABLES PORCH', category: 'PORCH MODELS', image: '/portable-29.png', link: '/end-gables-porch?selectedOption=14x44', price: '15,367.60' },




        { id: 137, title: '8x8 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gables-porch?selectedOption=8x8', price: '2,559.55' },
        { id: 138, title: '8x10 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=8x10', price: '2,755.25' },
        { id: 139, title: '8x12 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=8x12', price: '3,156.95' },
        { id: 140, title: '8x14 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=8x14', price: '3,610.15' },
        { id: 141, title: '8x16 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=8x16', price: '4,032.45' },
        { id: 142, title: '8x20 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=8x20', price: '4,969.75' },
        { id: 143, title: '10x10 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=10x10', price: '3,357.80' },
        { id: 144, title: '10x12 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=10x12', price: '3,713.15' },
        { id: 145, title: '10x14 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=10x14', price: '4,186.95' },
        { id: 146, title: '10x16 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=10x16', price: '4,665.90' },
        { id: 147, title: '10x20 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=10x20', price: '5,582.60' },
        { id: 148, title: '10x24 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=10x24', price: '6,617.75' },
        { id: 149, title: '10x30 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=10x30', price: '8,229.70' },
        { id: 150, title: '12x12 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=12x12', price: '4,336.30' },
        { id: 151, title: '12x14 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=12x14', price: '4,830.70' },
        { id: 152, title: '12x16 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=12x16', price: '5,397.20' },
        { id: 153, title: '12x20 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=12x20', price: '6,545.65' },
        { id: 154, title: '12x24 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=12x24', price: '7,678.65' },
        { id: 155, title: '12x30 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=12x30', price: '9,506.90' },
        { id: 156, title: '12X32 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=12x32', price: '10,114.60' },
        { id: 157, title: '12x36 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=12x36', price: '11,299.10' },
        { id: 158, title: '12x40 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=12x40', price: '12,432.10' },
        { id: 159, title: '12x44 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=12x44', price: '13,642.35' },
        { id: 160, title: '12x50 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=12x50', price: '15,429.40' },
        { id: 161, title: '14x24 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=14x24', price: '8,878.60' },
        { id: 162, title: '14x30 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=14x30', price: '11,010.70' },
        { id: 163, title: '14x32 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=14x32', price: '11,705.95' },
        { id: 164, title: '14x36 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=14x36', price: '13,050.10' },
        { id: 165, title: '14x40 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=14x40', price: '14,358.20' },
        { id: 166, title: '14x44 END GABLES CLASSIC', category: 'END GABLES', image: '/portable-35.png', link: '/end-gable-classic?selectedOption=14x44', price: '15,753.85' },
      



          { id: 167, title: '8x8 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=8x8', price: '2,209.35' },
          { id: 168, title: '8x10 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=8x10', price: '2,363.85' },
          { id: 169, title: '8x12 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=8x12', price: '2,724.35' },
          { id: 170, title: '8x14 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=8x14', price: '3,131.20' },
          { id: 171, title: '8x16 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=8x16', price: '3,512.30' },
          { id: 172, title: '8x20 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=8x20', price: '4,362.05' },
          { id: 173, title: '10x10 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=10x10', price: '2,920.05' },
          { id: 174, title: '10x12 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=10x12', price: '3,229.05' },
          { id: 175, title: '10x14 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=10x14', price: '3,666.80' },
          { id: 176, title: '10x16 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=10x16', price: '4,099.40' },
          { id: 177, title: '10x20 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=10x20', price: '4,933.70' },
          { id: 178, title: '10x24 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=10x24', price: '5,881.30' },
          { id: 179, title: '10x30 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=10x30', price: '7,364.50' },
          { id: 180, title: '12x12 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=12x12', price: '3,816.15' },
          { id: 181, title: '12x14 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=12x14', price: '4,264.20' },
          { id: 182, title: '12x16 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=12x16', price: '4,789.50' },
          { id: 183, title: '12x20 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=12x20', price: '5,850.40' },
          { id: 184, title: '12x24 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=12x24', price: '6,895.85' },
          { id: 185, title: '12x30 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=12x30', price: '8,595.35' },
          { id: 186, title: '12X32 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=12x32', price: '9,161.85' },
          { id: 187, title: '12x36 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=12x36', price: '10,258.80' },
          { id: 188, title: '12x40 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=12x40', price: '11,304.25' },
          { id: 189, title: '12x44 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=12x44', price: '12,426.95' },
          { id: 190, title: '12x50 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=12x50', price: '14,085.25' },
          { id: 191, title: '14x24 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=14x24', price: '8,054.60' },
          { id: 192, title: '14x30 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=14x30', price: '10,057.95' },
          { id: 193, title: '14x32 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=14x32', price: '10,706.85' },
          { id: 194, title: '14x36 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=14x36', price: '11,968.60' },
          { id: 195, title: '14x40 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=14x40', price: '13,189.15' },
          { id: 196, title: '14x44 END GABLES', category: 'END GABLES', image: '/portable-5.png', link: '/end-gables?selectedOption=14x44', price: '14,502.40' },
        


            { id: 197, title: '6x8 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=6x8', price: '2,286.60' },
            { id: 198, title: '6x10 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=6x10', price: '2,472.00' },
            { id: 199, title: '6x12 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=6x12', price: '2,775.85' },
            { id: 200, title: '8x8 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=8x8', price: '2,538.95' },
            { id: 201, title: '8x10 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=8x10', price: '3,131.20' },
            { id: 202, title: '8x12 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=8x12', price: '3,522.60' },
            { id: 203, title: '8x14 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=8x14', price: '4,130.30' },
            { id: 204, title: '8x16 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=8x16', price: '4,686.50' },
            { id: 205, title: '10x10 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=10x10', price: '3,836.75' },
            { id: 206, title: '10x12 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=10x12', price: '4,083.95' },
            { id: 207, title: '10x14 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=10x14', price: '4,804.95' },
            { id: 208, title: '10x16 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=10x16', price: '5,510.50' },
            { id: 209, title: '10x20 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=10x20', price: '6,473.55' },
            { id: 210, title: '12x12 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=12x12', price: '5,237.55' },
            { id: 211, title: '12x16 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=12x16', price: '6,695.00' },
            { id: 212, title: '12x20 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=12x20', price: '8,070.05' },
            { id: 213, title: '12x24 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=12x24', price: '9,161.85' },
            { id: 214, title: '12x30 GREENHOUSE', category: 'GREENHOUSE', image: '/portable-6.png', link: '/greenhouses?selectedOption=12x30', price: '11,417.55' },

              { id: 215, title: '8x10 SCREENHOUSE', category: 'SCREENHOUSE', image: '/portable-7.png', link: '/screenhouses?selectedOption=8x10', price: '3,540.00' },
              { id: 216, title: '8x12 SCREENHOUSE', category: 'SCREENHOUSE', image: '/portable-7.png', link: '/screenhouses?selectedOption=8x12', price: '4,065.00' },
              { id: 217, title: '8x14 SCREENHOUSE', category: 'SCREENHOUSE', image: '/portable-7.png', link: '/screenhouses?selectedOption=8x14', price: '4,695.00' },
              { id: 218, title: '8x16 SCREENHOUSE', category: 'SCREENHOUSE', image: '/portable-7.png', link: '/screenhouses?selectedOption=8x16', price: '5,325.00' },
              { id: 219, title: '10x10 SCREENHOUSE', category: 'SCREENHOUSE', image: '/portable-7.png', link: '/screenhouses?selectedOption=10x10', price: '4,330.00' },
              { id: 220, title: '10x12 SCREENHOUSE', category: 'SCREENHOUSE', image: '/portable-7.png', link: '/screenhouses?selectedOption=10x12', price: '4,860.00' },
              { id: 221, title: '10x14 SCREENHOUSE', category: 'SCREENHOUSE', image: '/portable-7.png', link: '/screenhouses?selectedOption=10x14', price: '5,530.00' },
              { id: 222, title: '10x16 SCREENHOUSE', category: 'SCREENHOUSE', image: '/portable-7.png', link: '/screenhouses?selectedOption=10x16', price: '6,205.00' },
              { id: 223, title: '10x20 SCREENHOUSE', category: 'SCREENHOUSE', image: '/portable-7.png', link: '/screenhouses?selectedOption=10x20', price: '7,505.00' },
              { id: 224, title: '10x24 SCREENHOUSE', category: 'SCREENHOUSE', image: '/portable-7.png', link: '/screenhouses?selectedOption=10x24', price: '9,010.00' },
              { id: 225, title: '12x12 SCREENHOUSE', category: 'SCREENHOUSE', image: '/portable-7.png', link: '/screenhouses?selectedOption=12x12', price: '5,710.00' },
              { id: 226, title: '12x14 SCREENHOUSE', category: 'SCREENHOUSE', image: '/portable-7.png', link: '/screenhouses?selectedOption=12x14', price: '6,445.00' },
              { id: 227, title: '12x16 SCREENHOUSE', category: 'SCREENHOUSE', image: '/portable-7.png', link: '/screenhouses?selectedOption=12x16', price: '7,220.00' },
              { id: 228, title: '12x20 SCREENHOUSE', category: 'SCREENHOUSE', image: '/portable-7.png', link: '/screenhouses?selectedOption=12x20', price: '8,820.00' },
              { id: 229, title: '12x24 SCREENHOUSE', category: 'SCREENHOUSE', image: '/portable-7.png', link: '/screenhouses?selectedOption=12x24', price: '10,400.00' },
              { id: 230, title: '12x30 SCREENHOUSE', category: 'SCREENHOUSE', image: '/portable-7.png', link: '/screenhouses?selectedOption=12x30', price: '12,735.00' },


                { id: 231, title: '6x5 PUMPHOUSE', category: 'PUMPHOUSE', image: '/portable-11.png', link: '/pumphouses?selectedOption=6x5', price: '2,125.00' },
                { id: 232, title: '6x6 PUMPHOUSE', category: 'PUMPHOUSE', image: '/portable-11.png', link: '/pumphouses?selectedOption=6x6', price: '2,325.00' }
              
  ];
  
  const router = useRouter();
  const { query } = router;
  const { category } = query;
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 24; // Number of cards to display per page

  useEffect(() => {
    // Update the selected category and current page if category is present in the URL
    if (category) {
      setSelectedCategory(category);
      setCurrentPage(1);
    }
  }, [category]);


  // Filter the cards based on the selected category
  const filteredCards = selectedCategory === 'all'
    ? cards
    : cards.filter((card) => card.category === selectedCategory);

  // Logic for pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);


 

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);

    // Update the URL with the new category
    router.push(`/all-buildings?category=${encodeURIComponent(category)}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <>
        <Head>
          <title>Browse Buildings | Buildings and More</title>
          <meta
            name="description"
            content="Buildings and More Portable Buildings"
          />
          <link rel="icon" href="/favicon.ico" />
          <GAnalytics/>
        </Head>
        <Nav />
    

        <section className="bg-white dark:bg-gray-900">
          <div className="mainpage mx-auto max-w-screen-xl py-8 px-4 lg:py-16">
      {/* Category filter */}
      <div className="inline-block text-center space-x-4 mb-4">
        <button
          className={`mt-1 mb-1 btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleCategoryChange('all')}
        >
          All
        </button>
        <button
          className={`mt-1 mb-1 btn ${selectedCategory === 'GAMBREL LOFTED BARN' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleCategoryChange('GAMBREL LOFTED BARN')}
        >
          GAMBREL LOFTED BARNS
        </button>
        <button
          className={`mt-1 mb-1 btn ${selectedCategory === 'SINGLE SLOPES' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleCategoryChange('SINGLE SLOPES')}
        >
          SINGLE SLOPES
        </button>
        <button
          className={`mt-1 mb-1 btn ${selectedCategory === 'PORCH MODELS' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleCategoryChange('PORCH MODELS')}
        >
          PORCH MODELS
        </button>
        <button
          className={`mt-1 mb-1 btn ${selectedCategory === 'END GABLES' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleCategoryChange('END GABLES')}
        >
          END GABLES
        </button>
        <button
          className={`mt-1 mb-1 btn ${selectedCategory === 'GREENHOUSE' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleCategoryChange('GREENHOUSE')}
        >
          GREENHOUSES
        </button>
        <button
          className={`mt-1 mb-1 btn ${selectedCategory === 'SCREENHOUSE' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleCategoryChange('SCREENHOUSE')}
        >
          SCREENHOUSES
        </button>
        <button
          className={`mt-1 mb-1 btn ${selectedCategory === 'PUMPHOUSE' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleCategoryChange('PUMPHOUSE')}
        >
          PUMPHOUSES
        </button>
      </div>
      {/* Card grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 sm:gap-2">
        {currentCards.map((card) => (
          
            <div key={card.id} className="bg-white p-4 rounded shadow">
                <a href={card.link}>
                  <Image
                    src={card.image}
                    alt="User profile picture"
                    width={500}
                    height={500}
                  />
                  </a>
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-gray-500">{card.category}</p>
            <p className="text-emerald-600 font-bold">{card.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array(Math.ceil(filteredCards.length / cardsPerPage))
          .fill(null)
          .map((_, index) => (
            <button
              key={index}
              className={`btn ${
                currentPage === index + 1 ? 'btn-primary' : 'btn-secondary'
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
    </section>
    <Footer/>
    </>
  );
};

export default AllBuildings;
