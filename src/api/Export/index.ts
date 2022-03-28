import { HttpService } from "@/utils/request";
const httpService = new HttpService()

/**
 * @description 导入Parse
 * @param params
 * @return {Promise<*|ElMessageComponent>}
 */
 export async function ImportParse(className, file) {
  let formData = new FormData()
  formData.append('className', className)
  formData.append('file', file)
  console.log('formdata', formData, className, file)
  return httpService.getClict({
    url: '/iotapi/import_data',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      accept: 'application/json',
    },
    data: formData,
  })
}