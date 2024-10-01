import { PageMember, PageProps } from "../members/page-member";

export const createPage = (pageProps: PageProps) => {
    return new PageMember(pageProps);
}