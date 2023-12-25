import React from "react"
interface OrderContentProps {
  keyId: string
  country: string
  city: string
  state: string
  street: string
  district: string
  code: string
  status: string
}

function OrderContent({
  keyId,
  country,
  city,
  state,
  street,
  district,
  code,
  status,
}: OrderContentProps) {
  return (
    <p
      key={keyId}
      style={{
        maxWidth: "200px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >{`Status: ${status} | ${country} - Rua ${street} - ${district}, ${city} - ${state}, ${code}`}</p>
  )
}

export default OrderContent
