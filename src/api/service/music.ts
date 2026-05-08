import { fetcher } from "../fetcher";

export function createMusic(data: { title: string, artwork: File | undefined, song: File }) {
    return fetcher("/music", {
        method: "POST",
        body: JSON.stringify(data)
    });
};

export function getMusics() {
    return fetcher("/music", {
        method: "GET"
    });
}