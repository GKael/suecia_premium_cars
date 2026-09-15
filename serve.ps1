$port = 8081
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Servidor rodando em http://localhost:$port"
try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        Write-Host "Request: $($request.Url.AbsolutePath)"
        
        $relativePath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($relativePath)) {
            $relativePath = "index.html"
        }
        $filePath = Join-Path $PWD $relativePath
        
        if (Test-Path $filePath) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            if ($ext -eq ".html") { $response.ContentType = "text/html; charset=utf-8" }
            elseif ($ext -eq ".png") { $response.ContentType = "image/png" }
            elseif ($ext -eq ".jpg" -or $ext -eq ".jpeg") { $response.ContentType = "image/jpeg" }
            elseif ($ext -eq ".webp") { $response.ContentType = "image/webp" }
            elseif ($ext -eq ".css") { $response.ContentType = "text/css" }
            elseif ($ext -eq ".js") { $response.ContentType = "application/javascript" }
            
            # Read file as bytes to properly serve images
            $buffer = [System.IO.File]::ReadAllBytes($filePath)
            
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        } else {
            $response.StatusCode = 404
        }
        $response.Close()
    }
} finally {
    $listener.Stop()
}
