export function getImageMimeType(base64: string): string {
    if (base64.startsWith("/9j/")) {
        return "image/jpeg";
    }

    if (base64.startsWith("iVBORw0KGgo")) {
        return "image/png";
    }

    if (base64.startsWith("R0lGOD")) {
        return "image/gif";
    }

    if (base64.startsWith("UklGR")) {
        return "image/webp";
    }

    return "image/jpeg";
}