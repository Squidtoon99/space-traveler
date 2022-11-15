import Title from "components/Title";
import styled from "styled-components";
import Image from "next/image";
import Link from "components/Link";

interface Vehicle {
    id: string;
    name: string;
    description: string;
    image: string;
}

const VehiclesGrid = styled.ul`
    /* Reset List */
    list-style: none;
    padding: 0;
    margin: 0;

    a {
        position: relative;
        z-index: 1;
    }

`

const StyledVehicle = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 100px;
    @media (max-width: 768px) {
      margin-bottom: 70px;
    }
    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }
  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;
      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;
      @media (max-width: 768px) {
        justify-content: flex-start;
      }
      li {
        margin: 0 0 5px 20px;
        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;
      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }
  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }
    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }
  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }
  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);
    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
    @media (max-width: 768px) {
      color: var(--white);
      a {
        position: static;
        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }
  .project-description {
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);
    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    }
    a {
      
    }
    strong {
      color: var(--white);
      font-weight: normal;
    }
  }
  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;
    li {
      margin: 0 20px 5px 0;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }
    @media (max-width: 768px) {
      margin: 10px 0;
      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }
  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);
    a {
      
      padding: 10px;
      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
    .cta {
      margin: 10px;
    }
  }
  .project-image {
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
    a {
      width: 100%;
      height: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;
      &:hover,
      &:focus {
        background: transparent;
        outline: 0;
        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }
    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);
      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
`;


const VehicleCard = ({ vehicle }: { vehicle: Vehicle; }) => {
    return (
        <StyledVehicle>
            <div className="project-content">
                <div>
                    <p className="project-overline">Featured Rocket</p>

                    <h3 className="project-title">
                        <a href={`/vehicles/${vehicle.id}`}>{vehicle.name}</a>
                    </h3>

                    <div className="project-description">
                        <p>{vehicle.description}</p>
                    </div>

                    <div className="project-links">
                        <Link href="/" aria-label="Github Link">
                            Hi
                        </Link>
                    </div>

                    <div className="project-image">
                        <Image src={vehicle.image} alt={vehicle.name} style={{position: "absolute", zIndex: 2}} fill />
                    </div>
                </div>
            </div>
        </StyledVehicle>
    );
};
const Vehicles = () => {
    const vehicles: Vehicle[] = [
        {
            id: "1",
            name: "Falcon 9",
            description: "The Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/SpaceX_Demo-2_Launch_%28NHQ202005300044%29_%28cropped%29.jpg"
        },
        {
            id: "2",
            name: "Falcon Heavy",
            description: "The Falcon Heavy is a heavy-lift launch vehicle with two stages and 27 engines, designed and manufactured by SpaceX for the reliable and safe transport of satellites, the Dragon spacecraft, and other payloads into orbit.",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Falcon_Heavy_Launch_-_GPN-2000-001253.jpg"
        },
        {
            id: "3",
            name: "Starship",
            description: "Starship is a fully reusable, super heavy-lift launch vehicle currently under development by SpaceX. It is designed to eventually replace the Falcon 9 and Falcon Heavy launch vehicles.",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Starship_SN8_Launch.jpg"
        }
    ]

    return <div style={{ justifyContent: "flex-start", padding: "3rem" }}>
        <Title style={{ fontSize: "3rem", opacity: "75%" }}>
            Vehicles
        </Title>
        <VehiclesGrid>
            {vehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}
        </VehiclesGrid>
    </div>;
};

export default Vehicles;