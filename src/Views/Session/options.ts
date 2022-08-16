export const useSessionOptions = (props: any) => {
  return [
    {
      name: 'Option 1',
      handle: () => {
        console.log('fire 1')
      }
    }
  ]
}

export const useMatchDashboardOptions = (props: any) => {
  return [
    {
      name: 'Option 2',
      handle: () => {
        console.log('fire 2')
      }
    }
  ]
}

export const useRecentEventOptions = (props: any) => {
  return [
    {
      name: 'Option 3',
      handle: () => {
        console.log('fire 3')
      }
    }
  ]
}
