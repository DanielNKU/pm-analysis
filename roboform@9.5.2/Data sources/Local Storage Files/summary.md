## Searching Local Data File

In the setting

```
{
    "rfo": {
        "license": "eyJhY2NvdW50SW5mbyI6eyJhY2NvdW50SWQiOiJ1LWx4aGRsZGcyM212cWRlNWUiLCJhY2NvdW50RW1haWwiOiJkYW5pZWw3NzU2QGZveG1haWwuY29tIiwidXNlck5hbWUiOiJkYW5pZWwiLCJoYXZlTGljZW5zZUluZm8iOnRydWUsImhhdmVMaWNlbnNlIjp0cnVlLCJsaWNlbnNlQWN0aXZlIjp0cnVlLCJsaWNlbnNlVHJpYWwiOnRydWUsImxpY2Vuc2VFeHBpcmF0aW9uVGltZSI6MTcwMTE0NzYwMCwibGljZW5zZUV4cGlyZXNJbkRheXMiOjI4LCJzeW5jQWxsb3dlZCI6dHJ1ZSwic3luY0ludGVydmFsTWlucyI6NjAsImNvbXBhbmllcyI6W10sImNyZWF0ZWRUaW1lIjoxNjk4NjM1MjA0LCJtb2RpZmllZCI6MTY5ODY0NjE3M319",
        "lastSynced": "1698646179",
        "login": "example@example.com",
        "accountId": "u-lxhdldg23mvqde5e",
        "server": "https:\/\/online.roboform.com",
        "idProvider": "",
        "idProviderHasLocalRedirectUrls": "0"
    },
    "preferences": "eyJvcHRpb25zIjpbeyJuYW1lIjoiVXNlVHJ1ZUNvbG9yIiwidmFsdWUiOiIxIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwfSx7Im5hbWUiOiJMb2NhbGl6YXRpb25GaWxlIiwidmFsdWUiOiJjbi1DaGluZXNlIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiTEFOR1VBR0UifSx7Im5hbWUiOiJOZXh0RW50ZXJNYXN0ZXJQYXNzd29yZE5vdGlmaWNhdGlvblRpbWUiLCJ2YWx1ZSI6IjE3MDEyMjk2OTMiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJPUFRJT05TIn0seyJuYW1lIjoiV2luZG93c0hlbGxvQXV0aEVuYWJsZWQiLCJ2YWx1ZSI6IjAiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJPUFRJT05TIn0seyJuYW1lIjoiRmluZ2VycHJpbnRXaW5CaW9BdXRoRW5hYmxlZCIsInZhbHVlIjoiMCIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6Ik9QVElPTlMifSx7Im5hbWUiOiJTdG9yZU1QSW5TeXN0ZW1Qcm90ZWN0ZWRTdG9yYWdlIiwidmFsdWUiOiIxIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiT1BUSU9OUyJ9LHsibmFtZSI6IkF1dGhlbnRpY2F0aW9uTWV0aG9kIiwidmFsdWUiOiIxIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiT1BUSU9OUyJ9LHsibmFtZSI6IldhdGNoQXV0aEVuYWJsZWQiLCJ2YWx1ZSI6IjAiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJPUFRJT05TIn0seyJuYW1lIjoiQ29tRmlsbEZvcm1zIiwidmFsdWUiOiIxIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiU1REQkFSIElURU1TIn0seyJuYW1lIjoiQ29tU2F2ZVBhc3MiLCJ2YWx1ZSI6IjEiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJTVERCQVIgSVRFTVMifSx7Im5hbWUiOiJDb21PcHRpb25zIiwidmFsdWUiOiIwIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiU1REQkFSIElURU1TIn0seyJuYW1lIjoiQ29tQ3VzdG9taXplSUVNZW51IiwidmFsdWUiOiIwIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiU1REQkFSIElURU1TIn0seyJuYW1lIjoiQ29tU2hvd1Rvb2xiYXIiLCJ2YWx1ZSI6IjEiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJTVERCQVIgSVRFTVMifSx7Im5hbWUiOiJDb21UYXNrQmFySWNvbiIsInZhbHVlIjoiMCIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IlNUREJBUiBJVEVNUyJ9LHsibmFtZSI6IkNvbVN5bmMiLCJ2YWx1ZSI6IjAiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJTVERCQVIgSVRFTVMifSx7Im5hbWUiOiJDb21Mb2dvZmYiLCJ2YWx1ZSI6IjAiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJTVERCQVIgSVRFTVMifSx7Im5hbWUiOiJDb21QYXNzd29yZEdlbmVyYXRvciIsInZhbHVlIjoiMCIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IlNUREJBUiBJVEVNUyJ9LHsibmFtZSI6IkNvbVNldEZpZWxkcyIsInZhbHVlIjoiMCIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IlNUREJBUiBJVEVNUyJ9LHsibmFtZSI6IkNvbVJlc2V0RmllbGRzIiwidmFsdWUiOiIwIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiU1REQkFSIElURU1TIn0seyJuYW1lIjoiQ29tQ2xlYXJGaWVsZHMiLCJ2YWx1ZSI6IjAiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJTVERCQVIgSVRFTVMifSx7Im5hbWUiOiJDb21FZGl0SWRlbnQiLCJ2YWx1ZSI6IjAiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJTVERCQVIgSVRFTVMifSx7Im5hbWUiOiJUYXNrQmFySWNvbiIsInZhbHVlIjoiMSIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IlNIT1JUQ1VUUyJ9LHsibmFtZSI6IklkZW50aXR5IiwidmFsdWUiOiIxIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiU0hPUlRDVVRTIn0seyJuYW1lIjoiT3B0aW9ucyIsInZhbHVlIjoiMSIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IlNIT1JUQ1VUUyJ9LHsibmFtZSI6IlBhc3NjYXJkRWRpdG9yIiwidmFsdWUiOiIxIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiU0hPUlRDVVRTIn0seyJuYW1lIjoiRmlsbEZvcm1zIiwidmFsdWUiOiIxIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiU0hPUlRDVVRTIn0seyJuYW1lIjoiUmZUb29sYmFyIiwidmFsdWUiOiIxIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiU0hPUlRDVVRTIn0seyJuYW1lIjoiUmZNZW51IiwidmFsdWUiOiIxIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiU0hPUlRDVVRTIn0seyJuYW1lIjoiUGFzc2NhcmQiLCJ2YWx1ZSI6IjEiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJTSE9SVENVVFMifSx7Im5hbWUiOiJSZXNldEZpZWxkcyIsInZhbHVlIjoiMSIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IlNIT1JUQ1VUUyJ9LHsibmFtZSI6IlNhZmVub3RlRWRpdG9yIiwidmFsdWUiOiIxIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiU0hPUlRDVVRTIn0seyJuYW1lIjoiRmlsbFN1Ym1pdCIsInZhbHVlIjoiMSIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IlNIT1JUQ1VUUyJ9LHsibmFtZSI6IklkZW50aXR5RWRpdG9yIiwidmFsdWUiOiIxIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiU0hPUlRDVVRTIn0seyJuYW1lIjoiU2F2ZUZvcm1zIiwidmFsdWUiOiIxIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiU0hPUlRDVVRTIn0seyJuYW1lIjoiQ2xlYXJGaWVsZHMiLCJ2YWx1ZSI6IjEiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJTSE9SVENVVFMifSx7Im5hbWUiOiJMb2dpbnMiLCJ2YWx1ZSI6IjEiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJTSE9SVENVVFMifSx7Im5hbWUiOiJSZlNlYXJjaEJveCIsInZhbHVlIjoiMSIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IlNIT1JUQ1VUUyJ9LHsibmFtZSI6IkxvZ29mZiIsInZhbHVlIjoiMSIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IlNIT1JUQ1VUUyJ9LHsibmFtZSI6IlNldEZpZWxkcyIsInZhbHVlIjoiMSIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IlNIT1JUQ1VUUyJ9LHsibmFtZSI6IlB3ZEdlbmVyYXRvciIsInZhbHVlIjoiMSIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IlNIT1JUQ1VUUyJ9LHsibmFtZSI6IlNhZmVub3RlcyIsInZhbHVlIjoiMSIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IlNIT1JUQ1VUUyJ9LHsibmFtZSI6IklkZW50aXRpZXMiLCJ2YWx1ZSI6IjEiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJTSE9SVENVVFMifSx7Im5hbWUiOiJDb21GaWxsRm9ybXMiLCJ2YWx1ZSI6IjEiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJDT05URVhUIE1FTlUgSVRFTVMifSx7Im5hbWUiOiJDb21TYXZlUGFzcyIsInZhbHVlIjoiMSIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IkNPTlRFWFQgTUVOVSBJVEVNUyJ9LHsibmFtZSI6IkNvbU9wdGlvbnMiLCJ2YWx1ZSI6IjAiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJDT05URVhUIE1FTlUgSVRFTVMifSx7Im5hbWUiOiJDb21DdXN0b21pemVJRU1lbnUiLCJ2YWx1ZSI6IjEiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJDT05URVhUIE1FTlUgSVRFTVMifSx7Im5hbWUiOiJDb21TaG93VG9vbGJhciIsInZhbHVlIjoiMSIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IkNPTlRFWFQgTUVOVSBJVEVNUyJ9LHsibmFtZSI6IkNvbVRhc2tCYXJJY29uIiwidmFsdWUiOiIwIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiQ09OVEVYVCBNRU5VIElURU1TIn0seyJuYW1lIjoiQ29tU3luYyIsInZhbHVlIjoiMCIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IkNPTlRFWFQgTUVOVSBJVEVNUyJ9LHsibmFtZSI6IkNvbUxvZ29mZiIsInZhbHVlIjoiMCIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IkNPTlRFWFQgTUVOVSBJVEVNUyJ9LHsibmFtZSI6IkNvbVBhc3N3b3JkR2VuZXJhdG9yIiwidmFsdWUiOiIwIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiQ09OVEVYVCBNRU5VIElURU1TIn0seyJuYW1lIjoiQ29tU2V0RmllbGRzIiwidmFsdWUiOiIwIiwidGltZXN0YW1wIjoxNjk4NjQ2MTgwLCJzZWN0aW9uIjoiQ09OVEVYVCBNRU5VIElURU1TIn0seyJuYW1lIjoiQ29tUmVzZXRGaWVsZHMiLCJ2YWx1ZSI6IjAiLCJ0aW1lc3RhbXAiOjE2OTg2NDYxODAsInNlY3Rpb24iOiJDT05URVhUIE1FTlUgSVRFTVMifSx7Im5hbWUiOiJDb21DbGVhckZpZWxkcyIsInZhbHVlIjoiMCIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IkNPTlRFWFQgTUVOVSBJVEVNUyJ9LHsibmFtZSI6IkNvbUVkaXRJZGVudCIsInZhbHVlIjoiMCIsInRpbWVzdGFtcCI6MTY5ODY0NjE4MCwic2VjdGlvbiI6IkNPTlRFWFQgTUVOVSBJVEVNUyJ9XX0="
}
```

Finding:

1. All secret data is encrypted.