export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.name || !body.phone || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: "Nama, nomor telepon, dan pesan wajib diisi.",
    });
  }

  return {
    success: true,
    message: "Pesan berhasil dikirim.",
    data: body,
  };
});
