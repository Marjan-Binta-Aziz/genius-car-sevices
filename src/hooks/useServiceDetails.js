import { useEffect, useState } from "react";

const useServiceDetails = (serviceId) => {
  const [service, setServices] = useState({});

  useEffect(() => {
    const url = `https://still-gorge-05300.herokuapp.com/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [serviceId]);
  return [service];
};

export default useServiceDetails;
