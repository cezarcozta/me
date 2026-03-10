"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/page-title/page-title";
import { catalogo, type CatalogItem } from "@/data/catalogo";

const priceFormatted = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  });

function normalizeDriveUrl(url: string) {
  try {
    const driveFileIdMatch = url.match(/(?:\/d\/|id=)([a-zA-Z0-9_-]+)/);
    if (driveFileIdMatch && driveFileIdMatch[1]) {
      return `https://drive.google.com/uc?export=view&id=${driveFileIdMatch[1]}`;
    }
    return url;
  } catch {
    return url;
  }
}

interface ItemImageProps {
  item: CatalogItem;
  onOpenModal: (item: CatalogItem, imageIndex: number) => void;
}

function ItemImage({ item, onOpenModal }: ItemImageProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const images = (item.imageUrls ?? []).map(normalizeDriveUrl);
  const hasImages = images.length > 0;
  const selectedImageUrl = hasImages ? images[selectedIndex] : "";
  const isDriveUrl = selectedImageUrl.startsWith("https://drive.google.com") || selectedImageUrl.startsWith("https://drive.usercontent.google.com");
  const proxiedImageUrl = isDriveUrl ? `/api/proxy-image?url=${encodeURIComponent(selectedImageUrl)}` : selectedImageUrl;

  const showPlaceholder = !hasImages || hasError || !selectedImageUrl;

  return (
    <div className="relative h-44 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
      {showPlaceholder ? (
        <div className="flex h-full w-full items-center justify-center text-sm font-medium text-muted-foreground">
          Imagens não disponíveis ou inválidas
        </div>
      ) : (
        <img
          src={proxiedImageUrl}
          alt={`Foto principal de ${item.item}`}
          className="h-full w-full cursor-pointer object-cover"
          loading="lazy"
          onError={() => setHasError(true)}
          onClick={() => onOpenModal(item, selectedIndex)}
        />
      )}

      {hasImages && images.length > 1 && !showPlaceholder && (
        <div className="absolute bottom-2 left-2 right-2 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={`${item.id}-thumb-${index}`}
              type="button"
              onClick={() => {
                setSelectedIndex(index);
                setHasError(false);
              }}
              className={`h-2 w-2 rounded-full ${
                index === selectedIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Selecionar foto ${index + 1} de ${item.item}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ImageModal({
  item,
  initialIndex,
  onClose,
}: {
  item: CatalogItem;
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const images = (item.imageUrls ?? []).map(normalizeDriveUrl);
  const hasImages = images.length > 0;
  const imageUrl = hasImages ? images[currentIndex] : "";
  const isDriveUrl = imageUrl.startsWith("https://drive.google.com") || imageUrl.startsWith("https://drive.usercontent.google.com");
  const proxiedImageUrl = isDriveUrl ? `/api/proxy-image?url=${encodeURIComponent(imageUrl)}` : imageUrl;

  if (!hasImages) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative mx-auto w-full max-w-3xl rounded-xl bg-white p-4 shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold hover:bg-gray-200"
        >
          Fechar
        </button>

        <h3 className="mb-2 text-lg font-bold">{item.item}</h3>

        <div className="mb-4 h-[60vh] overflow-hidden rounded-lg bg-slate-100">
          <img
            src={proxiedImageUrl}
            alt={`Imagem ${currentIndex + 1} de ${item.item}`}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>

        {images.length > 1 && (
          <div className="flex justify-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="rounded bg-primary px-4 py-2 text-white hover:bg-primary/90"
            >
              Anterior
            </button>
            <span className="px-2 text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
              className="rounded bg-primary px-4 py-2 text-white hover:bg-primary/90"
            >
              Próximo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CatalogoPage() {
  const [modalItem, setModalItem] = useState<CatalogItem | null>(null);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (item: CatalogItem, index: number) => {
    setModalItem(item);
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalItem(null);
    setModalIndex(0);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageTitle
        title="Catálogo"
        subtitle="Itens novos em excelente estado. Entre em contato para mais informações!"
      />

      <section className="container mx-auto px-4 py-8 lg:py-12">


        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {catalogo.map((item) => (
            <Card key={item.id} focusable className="overflow-hidden">
              <ItemImage item={item} onOpenModal={openModal} />

              <CardContent>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{item.item}</h3>
                  <Badge variant={item.condition === "NOVO" ? "secondary" : "outline"}>
                    {item.condition}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                <p className="mb-2 text-sm">
                  <span className="font-semibold">Dimensões:</span> {item.size}
                </p>

                <p className="text-lg font-bold text-primary">{priceFormatted(item.price)}</p>

                <div className="mt-4">
                  <Button
                    asChild
                    variant="default"
                    className="w-full"
                  >
                    <a
                      href={`https://wa.me/5511973328747?text=${encodeURIComponent(
                        `Olá, tenho interesse em ${item.item}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Quero comprar ${item.item} pelo WhatsApp`}
                      title={`Quero comprar ${item.item} pelo WhatsApp`}
                    >
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {catalogo.length === 0 && (
            <div className="col-span-full rounded-xl border border-dashed border-muted p-8 text-center text-sm text-muted-foreground">
              Nenhum item encontrado.
            </div>
          )}
        </div>
      </section>

      {modalItem && (
        <ImageModal item={modalItem} initialIndex={modalIndex} onClose={closeModal} />
      )}
    </main>
  );
}
