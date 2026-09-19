
export interface ProjectProps {
    title: string,
    contents: string,
    image: string,
    position?: "left" | "right",
    stack: string[],
    repoUrl: string,
    badge?: string
}
