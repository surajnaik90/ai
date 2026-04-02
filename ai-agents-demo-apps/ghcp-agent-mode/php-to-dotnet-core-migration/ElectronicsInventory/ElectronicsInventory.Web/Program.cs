using ElectronicsInventory.Web.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

// Configure the HttpClient for the API with bypass for development certificates
builder.Services.AddHttpClient<IItemService, ItemService>(client =>
{
    client.BaseAddress = new Uri("http://localhost:5050/"); // API endpoint (using HTTP port)
    client.DefaultRequestHeaders.Add("User-Agent", "ElectronicsInventory.Web");
    client.Timeout = TimeSpan.FromSeconds(30);
})
.ConfigurePrimaryHttpMessageHandler(() => new HttpClientHandler
{
    ServerCertificateCustomValidationCallback = (message, cert, chain, errors) => true,
    UseDefaultCredentials = true
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

// Disable HTTPS redirection in development to avoid certificate issues
if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}
app.UseStaticFiles();

app.UseRouting();
app.UseAuthorization();

app.MapRazorPages();

app.Run();
