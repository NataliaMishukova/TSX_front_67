import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// import Button from "components/Button/Button";
// import Client2 from "./AllClients/Client2";

import {
  PageWrapper,
  NavigationContainer,
  CompanyLink,
  LogoImg,
  ButtonControl,
  getActiveStyles
} from "./styles";

function Clients() {
  const navigate = useNavigate();

//   const goToHomePage = () => {
//     navigate("/");
//   };

//   const goBack = () => {
//     navigate(-1);
//   };

  useEffect(() => {
    // Unmounting
    return () => {
      console.log("Page About UNMOUNTING");
    };
  }, []);
    const goToClient1 = () => {
    navigate("/clients/client1")
  }
   const goToClient2 = () => {
    navigate("/clients/client2")
  }
  const goToClient3 = () => {
    navigate("/clients/client3")
  }
  return (
    <PageWrapper>
      Information about company
      <NavigationContainer>
          <CompanyLink onClick={goToClient1} >
                      <LogoImg
                      src="https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo=w480-h960-rw"
                      alt="Logo" />
        </CompanyLink>
        <CompanyLink onClick={goToClient2} >
          <LogoImg
                      src="https://blog.pintu.co.id/wp-content/uploads/2023/02/Siemens-Telah-Terjun-ke-Industri-Blockchain-Sejak-Tahun-2019-1024x771.jpg"
                      alt="Logo" />
        </CompanyLink>
        <CompanyLink onClick={goToClient3} >
           <LogoImg
                      src="https://cdn.bimmertoday.de/wp-content/uploads/2025/09/BMW-Logo-Neue-Klasse-iX3-NA5-ohne-Chrom-2026-01-1536x1027.jpg"
                      alt="Logo" />
        </CompanyLink>
      
      </NavigationContainer>

      {/* <ButtonControl>
        <Button onClick={goToHomePage} name="Go to Home page" />
      </ButtonControl> */}
    </PageWrapper>
  );
}

export default Clients;
