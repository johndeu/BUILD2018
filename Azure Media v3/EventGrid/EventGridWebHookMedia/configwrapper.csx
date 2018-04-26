using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class ConfigWrapper
{
    public string SubscriptionId
    {
        get { return Environment.GetEnvironmentVariable("SubscriptionId", EnvironmentVariableTarget.Process); }
    }

    public string ResourceGroup
    {
        get { return Environment.GetEnvironmentVariable("ResourceGroup", EnvironmentVariableTarget.Process); }
    }

    public string AccountName
    {
        get { return Environment.GetEnvironmentVariable("AccountName", EnvironmentVariableTarget.Process); }
    }

    public string AadTenantId
    {
        get { return Environment.GetEnvironmentVariable("AadTenantId", EnvironmentVariableTarget.Process); }
    }

    public string AadClientId
    {
        get { return Environment.GetEnvironmentVariable("AadClientId", EnvironmentVariableTarget.Process); }
    }

    public string AadSecret
    {
        get { return Environment.GetEnvironmentVariable("AadSecret", EnvironmentVariableTarget.Process); }
    }

    public Uri ArmAadAudience
    {
        get { return new Uri(Environment.GetEnvironmentVariable("ArmAadAudience", EnvironmentVariableTarget.Process)); }
    }

    public Uri AadEndpoint
    {
        get { return new Uri(Environment.GetEnvironmentVariable("AadEndpoint", EnvironmentVariableTarget.Process)); }
    }

    public Uri ArmEndpoint
    {
        get { return new Uri(Environment.GetEnvironmentVariable("ArmEndpoint", EnvironmentVariableTarget.Process)); }
    }

    public string Region
    {
        get { return Environment.GetEnvironmentVariable("Region", EnvironmentVariableTarget.Process); }
    }
}
