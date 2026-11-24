import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DUROZEN_PRODUCTS } from "@/data/products";
import ProductDetailsClient from "@/components/ProductDetailsClient";

export function generateStaticParams() {
  return DUROZEN_PRODUCTS.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = DUROZEN_PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found | Durozen Technologies",
    };
  }

  return {
    title: `${product.name} | Durozen Technologies`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} - Durozen Technologies`,
      description: product.tagline,
    },
  };
}

export default function ProductDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = DUROZEN_PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return notFound();
  }

  return <ProductDetailsClient product={product} />;
}
