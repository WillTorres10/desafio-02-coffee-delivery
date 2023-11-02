import {Header} from "@/components/Header";
import {Outlet} from "react-router-dom";
import {ContentContainer} from "@/layouts/DefaultLayout/styles.ts";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </>
  )
}
